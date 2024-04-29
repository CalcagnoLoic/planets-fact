import { useState } from "react";
import { Icons } from "../icons/Icons";
import type { specializedViews } from "../types/interface";

const tabs = ["overview", "structure", "surface"];
const tabsDesktop = ["overview", "internal structure", "surface geology"];

const AstroComponent = ({
  planet,
  activeColor,
  colorTab,
}: specializedViews) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedTabDesktop, setSelectedTabDesktop] = useState(tabsDesktop[0]);

  return (
    <section>
      <article className="flex content-around justify-between border-b-[1px] border-b-brightGray py-5 text-xs font-bold uppercase tracking-widest text-brightGray md:hidden">
        {tabs.map((tab) => (
          <div className="cursor-pointer" key={tab}>
            <span
              className={`${
                selectedTabDesktop === tab
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
          <img
            src={planet?.images.planet}
            alt={`${planet?.name} Planet`}
            className={`mt-[95px] xl:mx-auto ${planet?.name}-size`}
          />
        </div>

        <div className="mt-24 flex justify-around xl:mt-0 xl:w-1/3 xl:flex-col">
          <div className="text-white md:w-1/2 xl:w-full">
            <h1 className="text-center font-antonio text-5xl font-bold uppercase xl:mt-28 xl:text-start xl:text-6xl">
              {planet?.name}
            </h1>
            <p className="mt-4 text-center md:mt-6 md:text-start">
              <p className="mt-4 text-center md:mt-6 md:text-start">
                {selectedTabDesktop === "overview" &&
                  (selectedTab === "overview"
                    ? planet?.overview.content
                    : null)}
                {(selectedTabDesktop === "internal structure" ||
                  selectedTab === "structure") &&
                  planet?.structure.content}
                {(selectedTabDesktop === "surface geology" ||
                  selectedTab === "surface") &&
                  planet?.geology.content}
              </p>
            </p>

            <div className="flex justify-center gap-4 md:justify-start">
              <p className="mt-8 opacity-70">
                Source:{" "}
                <a
                  href={planet?.overview.source}
                  target="_blank"
                  className="font-bold underline"
                >
                  Wikipedia
                </a>
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
