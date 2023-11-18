'use client';

import { cn } from '@/utils/classNames';
import NavItem from '../NavItem/NavItem';
import Avatar from '../Avatar/Avatar';
import { Logo } from '../Logo';
import { useDispatch } from 'react-redux';
import { setIsToggled } from '@/state/slices/config';
import { useClickAway } from '@uidotdev/usehooks';
import { Dir, Theme } from '@/types/config.types';
import { NavItems } from '@/config/nav.config';
import { Card } from '../Card';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import gsap from 'gsap';

type SidebarProps = {
  className?: string;
  isExpanded: boolean;
  isToggled: boolean;
  isSmallDevice: boolean;
  dir: Dir;
  theme: Theme;
};

const Sidebar = ({
  className,
  isExpanded,
  isToggled,
  isSmallDevice,
  dir,
  theme,
}: SidebarProps) => {
  const dispatch = useDispatch();

  const ref = useClickAway<HTMLDivElement>(() => {
    dispatch(setIsToggled(false));
  });

  useEffect(() => {
    if (isSmallDevice && ref.current) {
      gsap.to(ref.current, {
        duration: 0.5,
        x: isToggled
          ? dir === 'ltr'
            ? '1rem'
            : '-1rem'
          : dir === 'ltr'
            ? -320
            : 320,
        opacity: isToggled ? 1 : 0,
        ease: 'power3.out',
      });
    } else {
      gsap.to(ref.current, {
        duration: 0.5,
        x: dir === 'ltr' ? '1rem' : '-1rem',
        opacity: 1,
        ease: 'power3.out',
      });
    }
  }, [isToggled, dir, isSmallDevice]);

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 0.5,
      width: isExpanded ? '16rem' : '4rem',
      ease: 'power3.out',
    });
  }, [isExpanded]);

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
        <Card
          isExpanded={isExpanded}
          title='Help us improve'
          description='Your feedback means everything to us. Please take a moment to share
          them.'
          icon={
            <ChatBubbleBottomCenterTextIcon className='h-[18px] w-[18px]' />
          }
          button={{
            title: 'Share your Feedback',
            onClick: () => {},
          }}
        />
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
