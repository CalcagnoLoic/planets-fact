import type { NavLinkProps } from "../types/interface";

export const getPlanetName = (pathname: string, namePlanet: NavLinkProps[]) => {
  if (pathname === "/planets-fact/") {
    return "Mercury";
  } else {
    const currentPlanet = namePlanet.find((planet: NavLinkProps) =>
      pathname.includes(planet.name),
    );
    return currentPlanet ? currentPlanet.name : null;
  }
};
