import React from 'react';
import styled, { css } from 'styled-components';
import { Pills, PillItem, PillButton } from './Pills';

const SegmentedWrapper = styled(Pills)`
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.separator};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export const SegmentedItem = styled(PillItem)`
  box-shadow: inset -1px 0 0 0 ${({ theme }) => theme.separator};
  flex: 1;

  + li {
    margin-left: -1px;
  }

  &:last-child {
    box-shadow: none;
  }
`;

const SegmentedButton = styled(PillButton)`
  border-radius: 0;
  box-shadow: none;
  width: 100%;

  &:not([disabled]):hover {
    opacity: 0.8;
  }

  ${({ variant }) =>
    variant === 'oneLiner' &&
    css`
      white-space: nowrap;
    `};

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.disabledBackground};
    color: ${({ theme }) => theme.disabled};
  }
`;

const SegmentedControls = ({
  options,
  value,
  onSelect,
  label,
  variant,
  ...props
}) => (
  <SegmentedWrapper gutterSize={0} {...props}>
    {options.map(
      (
        {
          value: optionValue,
          label,
          alternateActiveOptions = [],
          cls,
          ...optionProps
        },
        key,
      ) => (
        <SegmentedItem key={key}>
          <SegmentedButton
            className={
              value === optionValue ||
              alternateActiveOptions.indexOf(value) > -1
                ? 'active'
                : ''
            }
            onClick={() => onSelect(optionValue)}
            variant={variant}
            type="button"
            {...optionProps}
          >
            {label}
          </SegmentedButton>
        </SegmentedItem>
      ),
    )}
  </SegmentedWrapper>
);

SegmentedControls.defaultProps = {
  values: [],
  onSelect: () => null,
};

export default SegmentedControls;
