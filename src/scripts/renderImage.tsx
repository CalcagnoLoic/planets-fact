import type { RenderProps } from "../types/interface";

export const renderImage = ({ tab, planet }: RenderProps) => {
  switch (tab) {
    case "internal structure":
    case "structure":
      return (
        <img
          src={planet?.images.internal}
          alt={`${planet?.name} Planet`}
          className={`mt-[95px] xl:mx-auto ${planet?.size}`}
        />
      );
    case "surface geology":
    case "surface":
      return (
        <div className="relative">
          <img
            src={planet?.images.planet}
            alt={`${planet?.name}`}
            className={`${planet?.size} relative mt-[95px] xl:mx-auto `}
          />
          <img
            src={planet?.images.geology}
            alt={`${planet?.name} surface`}
            className="absolute left-[40.5%] top-[70%] h-[90px] w-[80px] md:h-[199px] md:w-[163px]"
          />
        </div>
      );
    default:
      return (
        <img
          src={planet?.images.planet}
          alt={`${planet?.name} Planet`}
          className={`mt-[95px] xl:mx-auto ${planet?.size}`}
        />
      );
  }
};
