import { Client } from "https://deno.land/x/postgres@v0.12.0/mod.ts";
import "https://deno.land/x/dotenv@v2.0.0/load.ts";

const client = new Client({
  user: Deno.env.get("USER_NAME")!,
  password: "postgres",
  database: Deno.env.get("DATABASE_NAME")!,
  hostname: Deno.env.get("HOST_NAME")!,
  port: Deno.env.get("PORT")!,
});
await client.connect();

export const db = client;
