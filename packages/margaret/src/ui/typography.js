import styled, { css } from 'styled-components';
import { media } from './utils';

export const fontSize = {
  h1: css`
    font-size: 1.875rem;
    line-height: 2.3125rem;
    letter-spacing: 0.012rem;

    ${media.tablet`
      font-size: 2.375rem;
      line-height: 2.875rem;
      letter-spacing: 0.011em;
    `}

    ${media.desktop`
      font-size: 3rem;
      line-height: 3.5rem;
      letter-spacing: .008em;
    `}
  `,

  h1Mega: css`
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: 0.011em;

    ${media.tablet`
      font-size: 3rem;
      line-height: 3.5625rem;
      letter-spacing: 0.008em;
    `}

    ${media.desktop`
      font-size: 3.75rem;
      line-height: 4.375rem;
      letter-spacing: .004em;
    `}
  `,

  h2: css`
    font-size: 1.5rem;
    line-height: 1.875rem;
    letter-spacing: 0.015em;

    ${media.tablet`
      font-size: 1.75rem;
      line-height: 2.125rem;
      letter-spacing: 0.013em;
    `}

    ${media.desktop`
      font-size: 2.125rem;
      line-height: 2.5625rem;
      letter-spacing: .011em;
    `}
  `,

  h3: css`
    font-size: 1.375rem;
    line-height: 1.75rem;
    letter-spacing: 0.016em;

    ${media.tablet`
      font-size: 1.5rem;
      line-height: 1.875rem;
      letter-spacing: 0.015em;
    `}

    ${media.desktop`
      font-size: 1.625rem;
      line-height: 2rem;
      letter-spacing: .014em;
    `}
  `,

  body: css`
    font-size: 1.0625rem;
    line-height: 1.375rem;
    letter-spacing: -0.024em;

    ${media.tablet`
        font-size: 1.125rem;
        line-height: 1.5rem;
        letter-spacing: -.02em;
      `}

    ${media.desktop`
        font-size: 1.125rem;
        line-height: 1.5rem;
        letter-spacing: -.02em;
      `}
  `,

  bodySmall: css`
    font-size: 0.9375rem;
    line-height: 1.25rem;
    letter-spacing: -0.15em;

    ${media.desktop`
        font-size: 1rem;
        line-height: 1.3125rem;
        letter-spacing: -.02em;
      `}
  `,
};

export const Title = styled.h1`
  ${fontSize.h1};
  margin-top: ${({ theme }) => theme.spacing()};
  margin-bottom: ${({ theme }) => theme.spacing(0.25)};
`;

export const Subtitle = styled.h2`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  ${fontSize.h2};
  font-weight: 400;
`;

export const Heading = styled.h3`
  ${fontSize.h3};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing()};
`;
