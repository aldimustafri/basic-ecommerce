const size = {
  mobileS: "320px",
  mobileM: "375px",
  // mobileL: "425px",
  mobileL: "540px",
  tablet: "768px",
  notebook: "1024px",
  laptop: "1440px",
  desktop: "2560px",
};

export const OnlyDevice = {
  mobileS: `only screen and (device-width: ${size.mobileS})`,
  mobileM: `only screen and (device-width: ${size.mobileM})`,
  mobileL: `only screen and (device-width: ${size.mobileL})`,
  tablet: `only screen and (device-width: ${size.tablet})`,
  notebook: `only screen and (device-width: ${size.notebook})`,
  laptop: `only screen and (device-width: ${size.laptop})`,
  desktop: `only screen and (device-width: ${size.desktop})`,
  desktopL: `only screen and (device-width: ${size.desktop})`,
};

export const MinDevice = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  notebook: `(min-width: ${size.notebook})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const MaxDevice = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  notebook: `(max-width: ${size.notebook})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
