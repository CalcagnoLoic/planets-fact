import type { RenderProps } from "../types/interface";

export const renderWikipediaLink = ({ tab, planet }: RenderProps) => {
  switch (tab) {
    case "structure":
    case "internal structure":
      return (
        <a href={planet?.structure.source} target="_blank" className="source">
          Wikipedia
        </a>
      );

    case "surface":
    case "surface geology":
      return (
        <a href={planet?.geology.source} target="_blank" className="source">
          Wikipedia
        </a>
      );

    default:
      return (
        <a href={planet?.overview.source} target="_blank" className="source">
          Wikipedia
        </a>
      );
  }
};
