import { Router } from "express";
import ts = require("typescript");

const router = Router();

const ctrlUsers = requiere("../controllers/users");

/* GET users listing. */
router.get("/", ts.ctrlUsers.index);

export default router;
