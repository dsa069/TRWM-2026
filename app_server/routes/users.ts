import { Router } from "express";
import { users } from "../controllers/users";

const router = Router();

/* GET users listing. */
router.get("/", users);

export default router;
