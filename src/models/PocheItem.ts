import { db } from "../db/db.ts";
import "https://deno.land/x/dotenv@v2.0.0/load.ts";

const TABLE_NAME = `${Deno.env.get("TABLE_NAME")}`;

interface PocheItemSchema {
  _id: { $oid: string };
  _date: string;
  title: string;
  url: string;
  memo: string;
  tags: string[];
  isPrivate: boolean;
}

type Payload = Pick<
  PocheItemSchema,
  "title" | "url" | "tags" | "isPrivate" | "memo"
>;

export class PocheItem {
  private constructor(
    public title: string,
    public url: string,
    public memo: string,
    public tags: string[],
    public isPrivate: boolean = false,
    public _id: object | undefined = undefined,
    public _date: string | undefined = undefined
  ) {}

  static async findAll() {
    // don't read env variable correctly
    const items = await db.queryObject<
      PocheItemSchema[]
    >`SELECT * FROM poche_items`;
    return items.rows;
  }

  static create({ title, url, memo, tags, isPrivate }: Payload) {
    return new this(title, url, memo, tags, isPrivate);
  }
  async save() {
    await db.queryObject(
      `INSERT INTO ${TABLE_NAME} (title, url, memo, tags, private) VALUES ($1, $2, $3, $4, $5)`,
      this.title,
      this.url,
      this.memo,
      this.tags,
      this.isPrivate
    );
  }
}
