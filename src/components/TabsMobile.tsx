import { useState } from "react";
import { Icons } from "../icons/Icons";
import type { specializedViews } from "../types/interface";

const tabs = ["overview", "structure", "surface"];

const AstroComponent = ({ planet, colorTab }: specializedViews) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className="block md:hidden">
      <article className="flex content-around justify-between border-b-[1px] border-b-brightGray py-5 text-xs font-bold uppercase tracking-widest text-brightGray md:hidden">
        {tabs.map((tab) => (
          <div className="cursor-pointer" key={tab}>
            <span
              className={`${
                selectedTab === tab
                  ? `border-b-4 ${colorTab} pb-4 text-white`
                  : ""
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </span>
          </div>
        ))}
      </article>

      <article className="flex flex-col items-center xl:flex-row xl:justify-around">
        <div className="xl:w-2/3">
          {selectedTab === "overview" && (
            <img
              src={planet?.images.planet}
              alt={`${planet?.name} Planet`}
              className={`mt-[95px] xl:mx-auto ${planet?.name}-size`}
            />
          )}
          {selectedTab === "structure" && (
            <img
              src={planet?.images.internal}
              alt={`${planet?.name} Planet`}
              className={`mt-[95px] xl:mx-auto ${planet?.name}-size`}
            />
          )}
          {selectedTab === "surface" && (
            <div className="relative">
              <img
                src={planet?.images.planet}
                alt={`${planet?.name} Planet`}
                className={`relative mt-[95px] xl:mx-auto ${planet?.name}-size`}
              />
              <img
                src={planet?.images.geology}
                alt={`${planet?.name} Planet`}
                className="absolute left-[36%] top-[70%] h-[118px] w-[100px]"
              />
            </div>
          )}
        </div>

        <div className="mt-24 flex justify-around xl:mt-0 xl:w-1/3 xl:flex-col">
          <div className="text-white md:w-1/2 xl:w-full">
            <h1 className="text-center font-antonio text-5xl font-bold uppercase xl:mt-28 xl:text-start xl:text-6xl">
              {planet?.name}
            </h1>
            <p className="mt-4 text-center md:mt-6 md:text-start">
              {selectedTab === "overview" && planet?.overview.content}
              {selectedTab === "structure" && planet?.structure.content}
              {selectedTab === "surface" && planet?.geology.content}
            </p>

            <div className="flex justify-center gap-4 md:justify-start">
              <p className="mt-8 opacity-70">
                Source:{" "}
                {selectedTab === "overview" && (
                  <a
                    href={planet?.overview.source}
                    target="_blank"
                    className="font-bold underline"
                  >
                    Wikipedia
                  </a>
                )}
                {selectedTab === "structure" && (
                  <a
                    href={planet?.structure.source}
                    target="_blank"
                    className="font-bold underline"
                  >
                    Wikipedia
                  </a>
                )}
                {selectedTab === "surface" && (
                  <a
                    href={planet?.geology.source}
                    target="_blank"
                    className="font-bold underline"
                  >
                    Wikipedia
                  </a>
                )}
              </p>
              <Icons kind="src" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AstroComponent;
