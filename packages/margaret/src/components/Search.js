import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { MdSearch, MdHighlightOff } from 'react-icons/md';
import { ButtonReset } from '../ui/base';
import { SearchInput } from '../ui/forms';

const CancelableInputContainer = styled.div`
  position: relative;
  display: inline-block;

  > ${ButtonReset} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: ${({ theme }) => theme.spacing(0.5)};
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.separator};

    &:hover {
      cursor: pointer;
    }
  }

  ${props =>
    (props.full || props.size === 'full') &&
    css`
      width: 100%;
    `};
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ theme }) => theme.spacing(0.25)};
  padding: ${({ theme }) => theme.spacing(0.25)};
  line-height: 0.8;
  color: ${({ theme }) => theme.separator};
`;

class Search extends Component {
  static defaultProps = {
    value: '',
    placeholder: 'Rechercher',
  };

  render() {
    const {
      onChange,
      value,
      onClear,
      secondary,
      placeholder,
      full,
      size,
      isFetching,
    } = this.props;

    return (
      <CancelableInputContainer full={full} size={size}>
        <SearchIcon>
          <MdSearch size="20" />
        </SearchIcon>

        <SearchInput
          ref={c => (this.input = c)}
          type="text"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />

        <ButtonReset
          phantom
          style={{ opacity: Boolean(value) ? 1 : 0 }}
          onClick={onClear}
        >
          <MdHighlightOff size="20" />
        </ButtonReset>
      </CancelableInputContainer>
    );
  }
}
export default Search;
