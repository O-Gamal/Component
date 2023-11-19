import { cn } from '@/utils/classNames';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types/nav.types';

type NavItemProps = {
  item: NavItem;
  secondary?: boolean;
  isExpanded?: boolean;
  dir: 'ltr' | 'rtl';
};

const NavItem = ({ item, secondary, isExpanded, dir }: NavItemProps) => {
  const pathname = usePathname();
  const active = pathname === item.href;

  const activePrimary = !secondary && active;
  const inActive = secondary || !active;

  return (
    <Link
      className={cn(
        'flex w-full items-center justify-between rounded-md pl-1 pr-2 text-sm  text-neutral-500 focus:outline-none dark:text-neutral-300 md:mb-1 md:text-base',
        {
          'bg-primary-50 text-primary-500 dark:bg-primary-800 dark:text-primary-50':
            activePrimary,
          'hover:text-neutral-800 dark:hover:text-neutral-400': inActive,
          'hover:bg-neutral-100 dark:hover:bg-neutral-800':
            inActive && !isExpanded,
          'pl-2 pr-1': dir === 'rtl',
        }
      )}
      href={item.href}
    >
      <div className='flex h-10 items-center gap-2 px-2.5 md:gap-3'>
        <span>{item.icon}</span>
        <span
          className={cn({
            hidden: !isExpanded,
          })}
        >
          {item.title}
        </span>
      </div>
      {!secondary && (
        <ChevronRightIcon
          className={cn('h-4 w-4', {
            'text-neutral-400': !active,
            hidden: !isExpanded,
            'rotate-180': dir === 'rtl',
          })}
        />
      )}
    </Link>
  );
};
export default NavItem;
