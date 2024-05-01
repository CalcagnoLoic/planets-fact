import { describe, expect, it } from "vitest";
import { getPlanetName } from "../scripts/getPlanetName";
import { namePlanet } from "../data/data";

describe("getPlanetName Unit Test Suite", () => {
  it("should be render Mercury", () => {
    expect(getPlanetName("/planets-fact/", namePlanet)).toBe("Mercury");
  });

  it("should be render Saturn", () => {
    expect(getPlanetName("/planets-fact/Saturn", namePlanet)).toBe("Saturn");
  });

  it("should be render Mars", () => {
    expect(getPlanetName("/planets-fact/Mars", namePlanet)).toBe("Mars");
  });

  it("should be render Neptune", () => {
    expect(getPlanetName("/planets-fact/Neptune", namePlanet)).toBe("Neptune");
  });

  it("should be render Venus", () => {
    expect(getPlanetName("/planets-fact/Venus", namePlanet)).toBe("Venus");
  });
});
