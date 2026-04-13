import { Router } from "express";
import {
  locationsCreate,
  locationsReadAll,
  locationsReadOne,
} from "../controllers/locations";
import { reviewsCreate, reviewsReadOne } from "../controllers/reviews";

const router = Router();

router.get("/locations", locationsReadAll);

router.get("/locations/:locationId", locationsReadOne);

router.post("/locations", locationsCreate);

router.get("/locations/:locationId/reviews/:reviewId", reviewsReadOne);

router.post("/locations/:locationId/reviews", reviewsCreate);

export default router;
