import React from 'react';
import { MdStar } from 'react-icons/md';
import { Icon } from './ui/base';

export const MyCardFooter = () => (
  <div style={{ display: 'flex', marginLeft: -16, marginRight: -16 }}>
    <div
      style={{
        flex: 1,
        textAlign: 'center',
        borderRight: '1px solid rgba(4%, 6%, 13%, .2)',
      }}
    >
      <p>Dog friendly</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Icon>
          <MdStar />
        </Icon>
        <Icon>
          <MdStar />
        </Icon>
        <Icon>
          <MdStar />
        </Icon>
      </div>
    </div>

    <div style={{ flex: 1, textAlign: 'center' }}>
      <p>Child friendly</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Icon>
          <MdStar />
        </Icon>
        <Icon>
          <MdStar />
        </Icon>
        <Icon>
          <MdStar />
        </Icon>
        <Icon>
          <MdStar />
        </Icon>
      </div>
    </div>
  </div>
);
