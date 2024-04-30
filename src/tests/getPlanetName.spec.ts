import { describe, expect, it } from "vitest";
import { getPlanetName } from "../scripts/getPlanetName";
import { namePlanet } from "../data/data";

describe("getPlanetName Unit Test Suite", () => {
  it("should be render Mercury", () => {
    expect(getPlanetName("/space-fact/", namePlanet)).toBe("Mercury");
  });

  it("should be render Saturn", () => {
    expect(getPlanetName("/space-fact/Saturn", namePlanet)).toBe("Saturn");
  });

  it("should be render Mars", () => {
    expect(getPlanetName("/space-fact/Mars", namePlanet)).toBe("Mars");
  });

  it("should be render Neptune", () => {
    expect(getPlanetName("/space-fact/Neptune", namePlanet)).toBe("Neptune");
  });

  it("should be render Venus", () => {
    expect(getPlanetName("/space-fact/Venus", namePlanet)).toBe("Venus");
  });
});
