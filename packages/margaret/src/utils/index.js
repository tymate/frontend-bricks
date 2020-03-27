export const VIEWPORT_SIZES = {
  desktop: 1200,
  medium: 1000,
  tablet: 750,
};

const mediaQuery = (...query) => (...rules) =>
  css`
    @media ${css(...query)} {
      ${css(...rules)};
    }
  `;

export const media = {
  tablet: mediaQuery`(min-width: ${VIEWPORT_SIZES.tablet / 16}em)`,
  medium: mediaQuery`(min-width: ${VIEWPORT_SIZES.medium / 16}em)`,
  desktop: mediaQuery`(min-width: ${VIEWPORT_SIZES.desktop / 16}em)`,
};
