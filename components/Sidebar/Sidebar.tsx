'use client';

import { cn } from '@/utils/classNames';
import { SidebarProps } from './Sidebar.types';
import NavItem from './NavItem';
import { NavItems } from './Sidebar.config';
import Avatar from './Avatar';
import FeedbackCard from './FeedbackCard';
import { Logo } from '../Logo';
import { useDispatch } from 'react-redux';
import { setIsToggled } from '@/state/slices/config';
import { useClickAway } from '@uidotdev/usehooks';

const Sidebar = ({ className, isExpanded, dir, theme }: SidebarProps) => {
  const dispatch = useDispatch();

  const ref = useClickAway<HTMLDivElement>(() => {
    dispatch(setIsToggled(false));
  });

  return (
    <section
      className={cn(
        'flex h-full w-60 flex-col justify-between overflow-clip rounded-lg bg-white p-2 shadow-lg ring-1 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-800',
        className
      )}
      ref={ref}
    >
      <section>
        <div className='mx-auto w-fit py-12'>
          <Logo
            inverse={theme === 'dark'}
            variant={isExpanded ? 'full-lockup' : 'icon-only'}
          />
        </div>
        <section>
          {NavItems.primary.map((item, index) => {
            return (
              <NavItem
                item={item}
                key={index}
                isExpanded={isExpanded}
                dir={dir}
              />
            );
          })}
        </section>
      </section>
      <section className='space-y-5'>
        <section>
          {NavItems.secondary.map((item, index) => {
            return (
              <NavItem
                item={item}
                key={index}
                isExpanded={isExpanded}
                dir={dir}
                secondary
              />
            );
          })}
        </section>
        <FeedbackCard isExpanded={isExpanded} />
        <Avatar
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Profile Photo'
          name='Mohamed Khalil'
          title='HR Manager'
          isExpanded={isExpanded}
          dir={dir}
        />
      </section>
    </section>
  );
};
export default Sidebar;
