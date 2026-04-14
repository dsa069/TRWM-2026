import { Request, Response } from "express";

const homeList = (req: Request, res: Response): void => {
  res.render("locations-list", {
    title: "Locator - find a place to work with wifi",
    pageHeader: {
      title: "Loc8r",
      strapline: "Find places to work with wifi near you!",
    },
    locations: [
      {
        name: "Starcups",
        address: "125 High Street, Reading, RG6 1PS",
        rating: 3,
        facilities: ["Hot drinks", "Food", "Premium wifi"],
        distance: "100m",
      },
      {
        name: "Cafe Hero",
        address: "125 High Street, Reading, RG6 1PS",
        rating: 4,
        facilities: ["Hot drinks", "Food", "Premium wifi"],
        distance: "200m",
      },
      {
        name: "Burger Queen",
        address: "125 High Street, Reading, RG6 1PS",
        rating: 2,
        facilities: ["Food", "Premium wifi"],
        distance: "250m",
      },
    ],
  });
};

const locationInfo = (req: Request, res: Response): void => {
  res.render("locations-info", {
    title: "Location Info",
  });
};

const addReview = (req: Request, res: Response): void => {
  res.render("location-review-form", {
    title: "Add Review",
  });
};

export { homeList, locationInfo, addReview };
