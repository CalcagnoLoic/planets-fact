export const getPlanetImage = (tab, data) => {
  switch (tab) {
    case "overview":
      return data?.images.overview;
    case "structure":
      return data?.images.structure;
    case "surface":
      return data?.images.surface;
    default:
      return null;
  }
};
