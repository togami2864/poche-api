import { Application } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import { router } from "./router.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

app.addEventListener("error", (evt) => {
  console.log(evt.error);
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors());

await app.listen({ port: 8080 });
