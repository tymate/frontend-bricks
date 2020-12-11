import styled from 'styled-components';
import { StyledList, StyledButtonReset, RawLink } from './base';
import { media } from './utils';

export const Tabs = styled(StyledList)`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing()};
  max-width: 100vw;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ${media.tablet`
    flex-wrap: wrap;
  `}
`;

export const Tab = styled.li`
  display: block;
  box-shadow: inset 0 -1px ${({ theme }) => theme.separator};
  + li {
    padding-left: ${({ theme }) => theme.spacing()};
  }
`;

export const TabNavButton = styled(StyledButtonReset)`
  background: transparent;
  border: 0;
  appearance: none;
  color: ${({ theme }) => theme.textLight};
  text-decoration: none;
  display: block;
  padding: ${({ theme }) => theme.spacing()};
  outline: none;
  cursor: pointer;
  min-width: 10em;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  white-space: nowrap;

  ${({ isActive, theme, media }) =>
    isActive &&
    `
      color: ${theme.primary};
      box-shadow: inset 0 -4px ${theme.primary};
    `};

  &.active {
    color: ${({ theme }) => theme.primary};
    box-shadow: inset 0 -4px ${({ theme }) => theme.primary};
  }

  ${media.tablet`
    width: 100%;
  `}
`;

export const TabNavLink = styled(TabNavButton)``.withComponent(RawLink);
