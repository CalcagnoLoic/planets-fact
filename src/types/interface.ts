export interface IconProps {
  kind: "chevron" | "menu" | "src";
}

type PlanetData = {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
};

export interface NavLinkProps {
  name: string;
  borderColor: string;
}

export interface specializedViews {
  planet: PlanetData;
  activeColor?: string;
  colorTab?: string;
}

export interface RenderProps {
  tab: string
  planet: PlanetData
}