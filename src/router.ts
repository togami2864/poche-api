import { Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import { pocheController } from "./controllers/pocheController.ts";

const router = new Router();

router.get("/api/v1/poche", pocheController.getAll);
router.post("/api/v1/poche", pocheController.create);
router.delete("/api/v1/poche/:id", pocheController.delete);

export { router };
