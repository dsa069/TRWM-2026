import { Request, Response } from "express";
import axios from "axios";
import { locationsCreate } from "../../app_api/controllers/locations";

const apiOption = {
  server: "http://localhost:3000",
};

//REVISAR
const renderHomepage = (
  req: Request,
  res: Response,
  locations: any[],
): void => {
  res.render("locations-list", {
    title: "Locator - find a place to work with wifi",
    pageHeader: {
      title: "Loc8r",
      strapline: "Find places to work with wifi near you!",
    },
    locations,
  });
};

const homeList = async (req: Request, res: Response): Promise<void> => {
  const path = "/api/locations";
  try {
    const locations = await axios.get(`${apiOption.server}${path}`);
    console.log(locations.data);
    renderHomepage(req, res, locations.data);
  } catch (err: any) {
    console.error(err.message);
    res.render("error", {
      message: "API lookup error",
      error: err,
    });
  }
};

const locationInfo = async (req: Request, res: Response): Promise<void> => {
  const path = `/api/locations/${req.params.locationId}`;
  try {
    const location = await axios.get(`${apiOption.server}${path}`);
    res.render("location-info", {
      title: location.data.name,
      location: location.data,
    });
  } catch (err: any) {
    console.error(err.message);
    res.render("error", {
      message: "API lookup error",
      error: err,
    });
  }
};

const addReview = async (req: Request, res: Response): Promise<void> => {
  const path = `/api/locations/${req.params.locationId}/reviews`;
  try {
    const location = await axios.get(
      `${apiOption.server}/api/locations/${req.params.locationId}`,
    );
    res.render("location-review-form", {
      title: `Add review`,
      location: location.data,
    });
  } catch (err: any) {
    console.error(err.message);
    res.render("error", {
      message: "API lookup error",
      error: err,
    });
  }
};

const doAddReview = async (req: Request, res: Response): Promise<void> => {
  const path = `/api/locations/${req.params.locationId}/reviews`;
  const postData = {
    author: req.body.name,
    rating: req.body.rating,
    reviewText: req.body.review,
  };

  console.log(req.body);
  console.log(postData);

  try {
    await axios.post(`${apiOption.server}${path}`, postData);
    res.redirect(`/location/${req.params.locationId}`);
  } catch (err: any) {
    console.error(err.message);
    res.render("error", {
      message: "API lookup error",
      error: err,
    });
  }
};

export { homeList, locationInfo, addReview, doAddReview };
