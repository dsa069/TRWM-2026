import { Router } from "express";
import { homeList, locationInfo, addReview } from "../controllers/locations";
import { about } from "../controllers/others";

const router = Router();

/* GET home page. */
router.get("/", homeList);
router.get("/location", locationInfo);
router.get("/location/review/new", addReview);
router.get("/about", about);

export default router;
