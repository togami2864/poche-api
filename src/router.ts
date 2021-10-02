import { Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";

const router = new Router();

router.get("/api/v1/poche", () => {});
router.post("/api/v1/poche", () => {});
router.delete("/api/v1/poche/:id", () => {});

export { router };
