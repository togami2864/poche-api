import { db } from "../db/db.ts";
import "https://deno.land/x/dotenv@v2.0.0/load.ts";

const TABLE_NAME = `${Deno.env.get("TABLE_NAME")}`;

interface PocheItemSchema {
  _id: string;
  _date: string;
  title: string;
  url: string;
  ogp: string;
  memo: string;
  tags: string[];
  isPrivate: boolean;
}

type Payload = Pick<
  PocheItemSchema,
  "title" | "url" | "tags" | "isPrivate" | "memo" | "ogp"
>;

export class PocheItem {
  private constructor(
    public title: string,
    public url: string,
    public ogp: string,
    public memo: string,
    public tags: string[],
    public isPrivate: boolean = false,
    public _id: string | undefined = undefined,
    public _date: string | undefined = undefined
  ) {}

  static async findAll() {
    // don't read env variable correctly
    const items = await db.queryObject<
      PocheItemSchema[]
    >`SELECT * FROM poche_items`;
    return items.rows;
  }

  static create({ title, url, ogp, memo, tags, isPrivate }: Payload) {
    return new this(title, url, ogp, memo, tags, isPrivate);
  }
  async save() {
    await db.queryObject(
      `INSERT INTO ${TABLE_NAME} (title, url, ogp, memo, tags, private) VALUES ($1, $2, $3, $4, $5, $6)`,
      this.title,
      this.url,
      this.ogp,
      this.memo,
      this.tags,
      this.isPrivate
    );
  }

  static async delete(id: string) {
    await db.queryObject(`DELETE FROM ${TABLE_NAME} WHERE id = $1`, id);
  }
}
