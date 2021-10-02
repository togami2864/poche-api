import { Client } from "https://deno.land/x/postgres/mod.ts";

class Database {
  client: typeof Client;

  constructor() {
    this.connect();
  }
  async connect() {
    this.client = new Client({
      user: "user",
      database: "poche_database",
      hostname: "localhost",
      port: 5432,
    });
    await this.client.connect();
  }
}

export default new Database().client();
