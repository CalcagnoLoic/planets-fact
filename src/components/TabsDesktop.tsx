import { Icons } from "../icons/Icons";
import { renderWikipediaLink } from "../scripts/renderWikipediaLink";
import { renderContents } from "../scripts/renderContents";
import { renderImage } from "../scripts/renderImage";
import { useState } from "react";
import type { specializedViews } from "../types/interface";

const AstroComponent = ({ planet, activeColor }: specializedViews) => {
  const tabsDesktop = ["overview", "internal structure", "surface geology"];
  const [selectedTabDesktop, setSelectedTabDesktop] = useState(tabsDesktop[0]);

  return (
    <section className="hidden md:block">
      <article className="flex flex-col items-center xl:flex-row xl:justify-around">
        <div className="xl:w-2/3">
          {renderImage({ tab: selectedTabDesktop, planet })}
        </div>

        <div className="mt-24 flex justify-around xl:mt-0 xl:w-1/3 xl:flex-col">
          <div className="text-white md:w-1/2 xl:w-full">
            <h1 className="mb-5 text-center font-antonio text-5xl font-bold uppercase md:text-start xl:mt-28 xl:text-6xl">
              {planet?.name}
            </h1>

            {renderContents({ tab: selectedTabDesktop, planet })}

            <div className="flex justify-center gap-4 md:justify-start">
              <p className="mt-8 opacity-70">
                Source:{" "}
                {renderWikipediaLink({ tab: selectedTabDesktop, planet })}
              </p>
              <Icons kind="src" />
            </div>
          </div>

          <div className="hidden grid-cols-1 gap-4 md:ml-8 md:mt-14 md:grid md:w-1/2 xl:ml-0 xl:mt-9 xl:w-full">
            {tabsDesktop.map((tab, index) => (
              <span
                className={` cursor-pointer border-2 border-brightGray px-7 py-3 font-bold hover:border-transparent ${selectedTabDesktop === tab ? `${activeColor} border-transparent hover:${activeColor}` : "duration-300 ease-in-out hover:bg-hurricane"}`}
                onClick={() => setSelectedTabDesktop(tab)}
                key={tab}
              >
                <span className="text-white opacity-50">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="ml-7 font-bold uppercase text-white">
                  {tab}
                </span>
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default AstroComponent;
