import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyledButtonReset } from './base';

const MAIN_SIDEBAR_WIDTH = 260;

export const Page = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.primaryGradient};
  min-height: 100vh;
  width: ${({ theme }) => theme.sidebarSize};
  color: ${({ theme }) => theme.textOnDark};
  position: fixed;
  overflow: visible;
  z-index: 1;
`;

export const HeaderSidebar = styled.div`
  height: ${({ theme }) => theme.headerSize};
  width: ${({ theme }) => theme.sidebarSize};
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing()};
  background-color: rgba(0, 0, 0, 0.4);
  font-weight: 600;
  color: ${({ theme }) => theme.sidebarTextColor};
`;

export const SidebarContent = styled.div`
  padding-bottom: ${({ theme }) => spacing()};
  padding-top: 0;
`;

export const SidebarNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.sidebarTextColor};
  padding: ${({ theme }) => theme.spacing()} 0;
  font-weight: 500;
  padding-right: ${({ theme }) => theme.spacing()};
  padding-left: ${({ theme }) => theme.spacing()};

  &:hover {
    color: ${({ theme }) => theme.sidebarHoverColor};
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

export const Content = styled.main`
  padding-left: ${({ theme }) => theme.sidebarSize};
  padding-top: 60px;
  width: 100%;

  ${props =>
    props.hasNoHeader &&
    css`
      padding-top: 0;
    `};
`;

export const HeaderWrapper = styled.div`
  width: calc(100% - ${MAIN_SIDEBAR_WIDTH});
  height: 60px;
  position: fixed;
  top: 0;
  left: ${MAIN_SIDEBAR_WIDTH};
  border-bottom: 1px solid ${({ theme }) => theme.separator};
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing()};
  z-index: 78;

  ${props =>
    props.isSpaced &&
    css`
      justify-content: space-between;
    `};

  ${props =>
    props.variant === 'secondary' &&
    css`
      top: 60px;
      left: 600px;
      width: calc(100% - 600px);
      justify-content: flex-start;
    `}
`;

export const LogOutButton = styled(StyledButtonReset)`
  padding: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.secondary};
  font-weight: 600;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
`;
