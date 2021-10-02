import { DenonConfig } from "https://deno.land/x/denon@2.4.9/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run src/server.ts",
      desc: "run my app.ts file",
      allow: ["net", "read", "env"],
      unstable: true,
    },
  },
};

export default config;
