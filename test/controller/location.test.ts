import {
  homeList,
  locationInfo,
  addReview,
} from "../../app_server/controllers/locations";

describe("Location controller", () => {
  const mockRender = jest.fn();
  const res: any = { render: mockRender };
  const req: any = {};

  beforeEach(() => {
    mockRender.mockClear();
  });

  test("homeList calls res.render with locations-list and locations array", () => {
    homeList(req, res);
    expect(mockRender).toHaveBeenCalledWith(
      "locations-list",
      expect.objectContaining({ locations: expect.any(Array) }),
    );
  });

  test("locationInfo calls res.render with locations-info", () => {
    locationInfo(req, res);
    expect(mockRender).toHaveBeenCalledWith(
      "locations-info",
      expect.objectContaining({ title: expect.any(String) }),
    );
  });

  test("addReview calls res.render with location-review-form", () => {
    addReview(req, res);
    expect(mockRender).toHaveBeenCalledWith(
      "location-review-form",
      expect.objectContaining({ title: expect.any(String) }),
    );
  });
});
