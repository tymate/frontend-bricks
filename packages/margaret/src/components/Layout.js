import React from 'react';
import { Sidebar as RawSidebar, HeaderSidebar, SidebarContent } from '../ui';

// export const SidebarItem = () => (

// )

export const Sidebar = ({ header, children }) => (
  <RawSidebar>
    <HeaderSidebar>{header}</HeaderSidebar>
    <SidebarContent>{children}</SidebarContent>
  </RawSidebar>
);
