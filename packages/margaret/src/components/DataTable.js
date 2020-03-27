import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { get, isEqual, orderBy, pickBy } from 'lodash';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { MdUnfoldMore, MdKeyboardArrowDown } from 'react-icons/md';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  TableFooterActions,
  TableWrapper,
} from '../ui/table';
import { createBrowserHistory } from 'history';
import LocationAwareSearch from './LocationAwareSearch';
import Spinner from './Spinner';

const history = createBrowserHistory();

const ASC = 'asc';
const DESC = 'desc';

const TopActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing()};
`;

export const Title = styled.p`
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Preview = styled.p`
  margin-bottom: 0;
  margin-top: ${({ theme }) => theme.spacing(0.5)};
`;

const getInitialState = ({ headings, activeProp }) => {
  let state = {};

  if (activeProp) {
    state = {
      ...state,
      activeProp,
    };
  }

  // eslint-disable-next-line
  for (const prop of headings) {
    state = {
      ...state,
      propByKey: {
        ...state.propByKey,
        [prop.slug]: DESC,
      },
    };
  }

  return state;
};

const Content = ({ render, value }) =>
  render ? render() : <span>{value}</span>;

const SwitchButton = styled.button`
  border: 0;
  outline: none;
  cursor: ${({ filterable, fixed }) =>
    filterable && !fixed ? 'pointer' : 'normal'};
  padding: 0;
  font-size: inherit;
  text-transform: inherit;
  display: flex;
  align-items: center;
  background-color: transparent;
  white-space: nowrap;
  display: block;
  width: 100%;
  text-align: inherit;
  text-decoration: none;
  display: flex;

  svg {
    margin-right: 0;
    transform: ${props => (props.desc ? 'none' : 'rotate(180deg)')};
    transition: transform 150ms ease;
  }
`;

class DataTable extends Component {
  static defaultProps = {
    headings: [],
    data: [],
    fixedLines: [],
    filterable: true,
    onOrderBy: () => null,
    sort: '',
    isSearchable: true,
  };

  render() {
    const {
      data,
      headings,
      style,
      fixedLines,
      filterable,
      modal,
      prev,
      fixedHeader,
      isLoading,
      emptyState,
      location,
      isSearchable,
      action,
      shouldHideTableHead,
      footer,
      footerActions,
      searchPlaceholder,
    } = this.props;

    const sort = get(queryString.parse(location && location.search), 'sort');

    return (
      <>
        <TopActions>
          {Boolean(isSearchable) && (
            <LocationAwareSearch
              history={history}
              placeholder={searchPlaceholder}
            />
          )}
          {action}
        </TopActions>

        <TableWrapper
          variant="bordered"
          hasFooterActions={Boolean(footerActions)}
        >
          <Table
            variant="bordered"
            style={style}
            fixedHeader={fixedHeader}
            hasFooterActions={Boolean(footerActions)}
          >
            {!shouldHideTableHead && (
              <Thead fixedHeader={fixedHeader}>
                <Tr as="div">
                  {headings.map(
                    ({
                      slug,
                      label,
                      fixed,
                      width,
                      textAlign,
                      hasNoLeftPadding,
                    }) => (
                      <Th
                        key={slug}
                        style={{ width, textAlign }}
                        hasNoLeftPadding={hasNoLeftPadding}
                      >
                        {Boolean(label) && (
                          <SwitchButton
                            as={!fixed ? Link : null}
                            to={{
                              pathname: location && location.pathname,
                              search: queryString.stringify(
                                pickBy({
                                  ...queryString.parse(
                                    location && location.search,
                                  ),
                                  sort:
                                    sort === `-${slug}`
                                      ? slug
                                      : sort === slug
                                      ? null
                                      : `-${slug}`,
                                }),
                              ),
                            }}
                            filterable={filterable}
                            fixed={fixed}
                            active={sort === slug || sort === `-${slug}`}
                            onClick={() => this.orderBy(slug, fixed)}
                            desc={sort === `-${slug}`}
                          >
                            {label}
                            {fixed ? null : sort === slug ||
                              sort === `-${slug}` ? (
                              <MdKeyboardArrowDown />
                            ) : (
                              <MdUnfoldMore />
                            )}
                          </SwitchButton>
                        )}
                      </Th>
                    ),
                  )}
                </Tr>
              </Thead>
            )}

            {!isLoading && (
              <Tbody shouldHideTableHead={shouldHideTableHead}>
                {data.map((data, index) => (
                  <Tr
                    key={index}
                    className={data.cls || ''}
                    to={
                      data.path
                        ? {
                            pathname: data.path,
                            search: location && location.search,
                            state: { modal, prev },
                          }
                        : null
                    }
                    as={!data.path ? 'div' : null}
                    onClick={data.onClick}
                    isWarning={data.isWarning}
                  >
                    {headings.map(
                      ({
                        slug,
                        className = '',
                        width,
                        nowrap,
                        textAlign,
                        hasNoHorizontalPadding,
                        hasNoLeftPadding,
                      }) => (
                        <Td
                          key={slug}
                          className={className}
                          nowrap={nowrap}
                          hasNoHorizontalPadding={hasNoHorizontalPadding}
                          hasNoLeftPadding={hasNoLeftPadding}
                          style={{
                            width,
                            whiteSpace: Boolean(width) ? 'initial' : 'nowrap',
                            textAlign: textAlign || 'left',
                          }}
                        >
                          <Content key={index} {...data[slug]} />
                        </Td>
                      ),
                    )}
                  </Tr>
                ))}

                {fixedLines.map((data, index) => (
                  <Tr key={index} className={data.cls || ''}>
                    {headings.map(({ slug }) => (
                      <Td key={slug}>
                        <Content key={index} {...data[slug]} />
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            )}

            {!isLoading && footer && (
              <Tfoot>
                {headings.map(({ slug }) => (
                  <Th style={{ whiteSpace: 'nowrap' }}>
                    <Content key={slug} {...footer[slug]} />
                  </Th>
                ))}
              </Tfoot>
            )}
          </Table>
        </TableWrapper>

        {!isLoading && footerActions && (
          <TableFooterActions followsEmptyTable={data.length === 0}>
            {footerActions}
          </TableFooterActions>
        )}

        {isLoading && <Spinner size={40} />}

        {Boolean(emptyState) && data.length === 0 && !isLoading && emptyState}
      </>
    );
  }
}

DataTable.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      label: PropTypes.string,
      width: PropTypes.string,
      textAlign: PropTypes.string,
      hasNoLeftPadding: PropTypes.bool,
      fixed: PropTypes.bool,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      label: PropTypes.string,
      width: PropTypes.string,
      textAlign: PropTypes.string,
      hasNoLeftPadding: PropTypes.bool,
      fixed: PropTypes.bool,
      onClick: PropTypes.func,
      isWarning: PropTypes.bool,
      path: PropTypes.string,
    }),
  ),
  fixedLines: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  isSearchable: PropTypes.bool,
  shouldHideTableHead: PropTypes.bool,
  filterable: PropTypes.bool,
  action: PropTypes.node,
  footer: PropTypes.node,
  footerActions: PropTypes.node,
  emptyState: PropTypes.node,
};

export default withRouter(DataTable);
