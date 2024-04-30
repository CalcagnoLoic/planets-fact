import type { RenderProps } from "../types/interface";

export const renderWikipediaLink = ({ tab, planet }: RenderProps) => {
  if (tab === "overview") {
    return (
      <a
        href={planet?.overview.source}
        target="_blank"
        className="font-bold underline"
      >
        Wikipedia
      </a>
    );
  } else if (tab === "internal structure" || tab === "structure") {
    return (
      <a
        href={planet?.structure.source}
        target="_blank"
        className="font-bold underline"
      >
        Wikipedia
      </a>
    );
  } else if (tab === "surface geology" || tab === "surface") {
    return (
      <a
        href={planet?.geology.source}
        target="_blank"
        className="font-bold underline"
      >
        Wikipedia
      </a>
    );
  }
};
