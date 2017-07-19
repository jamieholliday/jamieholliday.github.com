import { css } from 'styled-components';

export const layout = {
  maxWidth: 1200,
};
const breakpoints = {
  sm: 747,
  md: 1024,
  lg: 1200,
};

export const fonts = {
  default: '"Raleway", sans-serif',
};

export const colours = {
  blue: '#428bca',
  darkBlue: '#5d6c80',
};

const mediaRules = {
  onlyXs: `only screen and (max-width: ${breakpoints.sm - 1}px)`,
  /* small size and up */
  sm: `only screen and (min-width: ${breakpoints.sm}px)`,
  // /* medium size and up */
  md: `(min-width: ${breakpoints.md}px)`,
  // /* only medium size */
  onlyMd: `only screen and (min-width: ${breakpoints.md}px) and ${breakpoints.lg -
    1}px`,
  // /* large size and up */
  lg: `(min-width: ${breakpoints.lg}px)`,
};

export const media = Object.keys(mediaRules).reduce((prev, next) => {
  return {
    ...prev,
    [`${next}`]: (...args) => css`@media ${mediaRules[next]}{${css(...args)}}`,
  };
}, {});
