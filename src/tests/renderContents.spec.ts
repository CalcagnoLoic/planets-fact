import { renderContents } from "@scripts/renderContents";
import { describe, expect, it } from "vitest";
import dataFact from "../data/data.json";

describe("renderContents Unit Test Suite", () => {
  const mercuryData = dataFact.find((planet) => planet.name === "Mercury");

  {
    mercuryData &&
      it("should be render overview text for mercury", () => {
        expect(
          renderContents({ tab: "overview", planet: mercuryData }),
          mercuryData?.overview.content,
        );
      });

    mercuryData &&
      it("should render structure text on mobile for mercury", () => {
        expect(
          renderContents({ tab: "structure", planet: mercuryData }),
          mercuryData?.structure.content,
        );
      });

    mercuryData &&
      it("should render geology text on desktop for mercury", () => {
        expect(
          renderContents({ tab: "surface geology", planet: mercuryData }),
          mercuryData?.geology.content,
        );
      });
  }
});
