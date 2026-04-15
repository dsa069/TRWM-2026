// Mock axios before any imports
jest.mock("axios");
import axios from "axios";
import {
  homeList,
  locationInfo,
  addReview,
} from "../../app_server/controllers/locations";

describe("Location controller", () => {
  const mockRender = jest.fn();
  const res: any = { render: mockRender };

  beforeEach(() => {
    mockRender.mockClear();
  });

  test("homeList calls res.render with locations-list and locations array", async () => {
    const req: any = {};
    const fakeLocations = [{ name: "Place 1" }, { name: "Place 2" }];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: fakeLocations });
    await homeList(req, res);
    expect(mockRender).toHaveBeenCalledWith(
      "locations-list",
      expect.objectContaining({ locations: expect.any(Array) }),
    );
  });

  test("locationInfo calls res.render with location-info", async () => {
    const req: any = { params: { locationId: "test-location-id" } };
    const fakeLocation = { name: "Test Location" };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: fakeLocation });
    await locationInfo(req, res);
    expect(mockRender).toHaveBeenCalledWith(
      "location-info",
      expect.objectContaining({ title: expect.any(String) }),
    );
  });

  test("addReview calls res.render with location-review-form", async () => {
    const req: any = { params: { locationId: "test-location-id" } };
    const fakeLocation = { name: "Test Location" };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: fakeLocation });
    await addReview(req, res);
    expect(mockRender).toHaveBeenCalledWith(
      "location-review-form",
      expect.objectContaining({ title: expect.any(String) }),
    );
  });
});
