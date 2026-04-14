import { Request, Response } from "express";
import Location from "../models/locations";

export const locationsReadAll = async (req: Request, res: Response) => {
  try {
    const locations = await Location.find().exec();
    res.status(200).json(locations);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const locationsReadOne = async (req: Request, res: Response) => {
  try {
    const location = await Location.findById(req.params.locationId).exec();
    if (!location) return res.status(404).json({ message: "not found" });
    return res.status(200).json(location);
  } catch (err: any) {
    console.error(err.message);
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Bad Request" });
    }
    res.status(500).json({ message: "Unknown Error" });
  }
};

export const locationsCreate = async (req: Request, res: Response) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (err: any) {
    res.status(400).json({ error: err });
  }
};

export const locationsUpdate = async (req: Request, res: Response) => {
  try {
    const location = await Location.findByIdAndUpdate(
      req.params.locationId,
      req.body,
      //New es para devolver el documento actualizado, en lugar del antiguo.
      //Que se validen los datos antes de actualizar
      { new: true, runValidators: true }
    ).exec();
    if (!location) return res.status(404).json({ message: "not found" });
    res.status(200).json(location);
  } catch (err: any) {
    console.error(err.message);
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Bad Request" });
    }
    res.status(500).json({ message: "Unknown Error" });
  }
};

export const locationsDelete = async (req: Request, res: Response) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.locationId).exec();
    if (!location) return res.status(404).json({ message: "not found" });
    return res.status(204).json();
  } catch (err: any) {
    console.error(err.message);
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Bad Request" });
    }
    res.status(500).json({ message: "Unknown Error" });
  }
};
