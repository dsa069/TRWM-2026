import { Router } from "express";
import { index } from "../controllers/main";

const router = Router();

/* GET home page. */
router.get("/", index);

export default router;
