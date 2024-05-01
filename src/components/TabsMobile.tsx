import { Icons } from "../icons/Icons";
import { renderImage } from "../scripts/renderImage";
import { renderContents } from "../scripts/renderContents";
import { renderWikipediaLink } from "../scripts/renderWikipediaLink";
import type { specializedViews } from "../types/interface";
import { useState } from "react";

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
          {renderImage({ tab: selectedTab, planet })}
        </div>

        <div className="mt-24 flex justify-around xl:mt-0 xl:w-1/3 xl:flex-col">
          <div className="text-white md:w-1/2 xl:w-full">
            <h1 className="text-center font-antonio text-5xl font-bold uppercase xl:mt-28 xl:text-start xl:text-6xl">
              {planet?.name}
            </h1>
            {renderContents({ tab: selectedTab, planet })}

            <div className="flex justify-center gap-4 md:justify-start">
              <p className="mt-8 opacity-70">
                Source: {renderWikipediaLink({ tab: selectedTab, planet })}
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
