export type SidebarProps = {
  className?: string;
  isExpanded: boolean;
  dir: 'ltr' | 'rtl';
  theme: 'light' | 'dark';
};

export type NavItemType = {
  href: string;
  icon?: JSX.Element;
  title: string;
};
