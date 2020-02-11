import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const TableWrapper = styled.div`
  border-radius: 8px;

  ${props =>
    props.variant === 'bordered' &&
    !props.isEmpty &&
    css`
      background-color: #fff;
      border: 1px solid ${({ theme }) => theme.separator};
    `};

  ${props =>
    props.hasFooterActions &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-width: 0;
    `}
`;

export const Table = styled.div`
  width: 100%;
  display: table;
`;

export const Cell = styled.div`
  display: table-cell;

  ${props => props.full && `width: 100%;`};
`;

export const Thead = styled.div`
  display: table-header-group;
`;

export const Tfoot = styled.div`
  display: table-footer-group;

  > * {
    border-top: 1px solid ${({ theme }) => theme.separator};
  }
`;

export const Th = styled.div`
  display: table-cell;
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing()};
  text-align: left;
  vertical-align: middle;
  font-weight: 600;
  color: inherit;

  a,
  button {
    color: inherit;
    font-weight: inherit;
  }

  span {
    display: inline-block;
  }

  + div {
    padding-left: 0;
  }

  ${props =>
    props.hasNoHorizontalPadding &&
    css`
      padding-left: 0;
    `};
`;

const trStyles = `
  display: table-row;
  position: relative;

  svg {
    font-size: ${({ theme }) => theme.size(2)};
  }
`;

const LinkTr = styled(Link)`
  ${trStyles};
  text-decoration: none;
  color: inherit;

  &.bold {
    font-weight: bold;
  }

  &:hover {
  }
`;

const DefaultTr = styled.div`
  ${trStyles};

  &.active:hover {
    cursor: pointer;
  }

  a.bold {
    font-weight: bold;
  }
`;

export const Tr = styled(LinkTr)`
  ${({ isWarning }) =>
    isWarning &&
    `
    background-color: #fee7e1;
    color: rgba(0,0,0,0.87) !important;
     a {
      color: #ff8863 !important;
     }
    `}
`;

export const Td = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: ${({ theme }) => theme.spacing(0.75)}
    ${({ theme }) => theme.spacing()};
  border-top: 1px solid ${({ theme }) => theme.separator};

  + div {
    padding-left: 0;
  }

  ${props =>
    props.hasNoHorizontalPadding &&
    css`
      padding-left: 0;
      padding-right: 0;
    `};

  ${props =>
    props.hasNoLeftPadding &&
    css`
      padding-left: 0;
    `};
`;

export const Tbody = styled.div`
  display: table-row-group;

  ${({ shouldHideTableHead }) =>
    shouldHideTableHead &&
    css`
      > ${Tr}:first-child > * {
        border-top: 0;
      }
    `}
`;

export const TableFooterActions = styled.div`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.separator};
  border-top-width: 0;
  padding: ${({ theme }) => theme.spacing()};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  ${props =>
    props.followsEmptyTable &&
    css`
      border-top-width: 1px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    `}
`;
