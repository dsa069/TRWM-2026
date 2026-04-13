import { Request, Response } from "express";
import Location from "../models/locations";

export const reviewsReadOne = async (req: Request, res: Response) => {
  try {
    const location = await Location.findById(req.params.locationId)
      .select("name reviews")
      .exec();
    if (!location)
      return res.status(404).json({ message: "Location not found" });

    //compara el id de cada review con el id recibido en la URL
    const review = location.reviews?.find(
      (r: any) => r._id?.toString() === req.params.reviewId,
    );
    if (!review) return res.status(404).json({ message: "Review not found" });

    const response = {
      location: {
        name: location.name,
        _id: req.params.locationId,
      },
      review,
    };
    return res.status(200).json(review);
  } catch (err: any) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Bad Request" });
    }
    res.status(500).json({ message: "Unknown Error" });
  }
};

export const reviewsCreate = async (req: Request, res: Response) => {
  try {
    const location = await Location.findById(req.params.locationId)
      .select("name reviews")
      .exec();
    if (!location)
      return res.status(404).json({ message: "Location not found" });

    location.reviews?.push({
      author: req.body.author,
      rating: req.body.rating,
      reviewText: req.body.reviewText,
    });

    const savedLocation = await location.save();

    const review = savedLocation.reviews?.[savedLocation.reviews.length - 1];

    return res.status(200).json(review);
  } catch (err: any) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Bad Request" });
    }
    res.status(500).json({ message: "Unknown Error" });
  }
};
