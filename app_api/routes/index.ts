import { Router } from "express";
import {
  locationsCreate,
  locationsReadAll,
  locationsReadOne,
  locationsUpdate,
  locationsDelete,
} from "../controllers/locations";
import {
  reviewsCreate,
  reviewsReadOne,
  reviewsUpdate,
  reviewsDelete,
} from "../controllers/reviews";

const router = Router();

router.get("/locations", locationsReadAll);

router.get("/locations/:locationId", locationsReadOne);

router.post("/locations", locationsCreate);

router.put("/locations/:locationId", locationsUpdate);

router.delete("/locations/:locationId", locationsDelete);

router.get("/locations/:locationId/reviews/:reviewId", reviewsReadOne);

router.post("/locations/:locationId/reviews", reviewsCreate);

router.put("/locations/:locationId/reviews/:reviewId", reviewsUpdate);

router.delete("/locations/:locationId/reviews/:reviewId", reviewsDelete);

export default router;
