import type { RenderProps } from "../types/interface";

export const renderImage = ({ tab, planet }: RenderProps) => {
  if (tab === "overview") {
    return (
      <img
        src={planet?.images.planet}
        alt={`${planet?.name} Planet`}
        className={`mt-[95px] xl:mx-auto ${planet?.name}-size`}
      />
    );
  } else if (tab === "internal structure" || tab === "structure") {
    return (
      <img
        src={planet?.images.internal}
        alt={`${planet?.name} Planet`}
        className={`mt-[95px] xl:mx-auto ${planet?.name}-size`}
      />
    );
  } else if (tab === "surface geology" || tab === "surface") {
    return (
      <div className="relative">
        <img
          src={planet?.images.planet}
          alt={`${planet?.name} Planet`}
          className={`relative mt-[95px] xl:mx-auto ${planet?.name}-size`}
        />
        <img
          src={planet?.images.geology}
          alt={`${planet?.name} Planet`}
          className="absolute left-[40.5%] top-[70%] h-[199px] w-[163px]"
        />
      </div>
    );
  }
};
