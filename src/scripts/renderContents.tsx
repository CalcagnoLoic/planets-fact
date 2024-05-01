import type { RenderProps } from "../types/interface";

export const renderContents = ({ tab, planet }: RenderProps) => {
  switch (tab) {
    case "structure":
    case "internal structure":
      return <p className="contents">{planet?.structure.content}</p>;

    case "surface":
    case "surface geology":
      return <p className="contents">{planet?.geology.content}</p>;

    default:
      return <p className="contents">{planet?.overview.content}</p>;
  }
};
