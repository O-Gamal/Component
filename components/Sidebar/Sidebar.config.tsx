import { NavItemType } from './Sidebar.types';
import {
  HomeIcon,
  ChartBarSquareIcon,
  Squares2X2Icon,
  DocumentTextIcon,
  ArchiveBoxIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

export const iconClassName = 'h-5 w-5';

export const NavItems = {
  primary: [
    {
      title: 'Dashboard',
      icon: <HomeIcon className={iconClassName} />,
      href: '/',
    },
    {
      title: 'Products',
      icon: <Squares2X2Icon className={iconClassName} />,
      href: '/products',
    },
    {
      title: 'Invoices',
      icon: <DocumentTextIcon className={iconClassName} />,
      href: '/invoices',
    },
    {
      title: 'Statistics',
      icon: <ChartBarSquareIcon className={iconClassName} />,
      href: '/Statistics',
    },
  ],
  secondary: [
    {
      title: 'Archive',
      icon: <ArchiveBoxIcon className={iconClassName} />,
      href: '/archive',
    },
    {
      title: 'Help Center',
      icon: <QuestionMarkCircleIcon className={iconClassName} />,
      href: '/help-center',
    },
    {
      title: 'Settings',
      icon: <Cog6ToothIcon className={iconClassName} />,
      href: '/settings',
    },
  ],
};
