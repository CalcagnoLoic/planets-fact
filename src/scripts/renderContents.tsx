import type { RenderProps } from "../types/interface";

export const renderContents = ({tab, planet}: RenderProps) => {
  if (tab === "overview") {
    return (
      <p className="mt-4 text-center md:mt-6 md:text-start">
        {planet?.overview.content}
      </p>
    );
  } else if (tab === "internal structure") {
    return (
      <p className="mt-4 text-center md:mt-6 md:text-start">
        {planet?.structure.content}
      </p>
    );
  } else if (tab === "surface geology") {
    return (
      <p className="mt-4 text-center md:mt-6 md:text-start">
        {planet?.geology.content}
      </p>
    );
  }
};
