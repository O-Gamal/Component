'use client';

import { Sidebar } from '@/components/Sidebar';
import {
  selectDir,
  selectIsExpanded,
  selectIsToggled,
} from '@/state/slices/config';
import { Theme } from '@/types/config.types';
import { cn } from '@/utils/classNames';
import { useMediaQuery } from '@uidotdev/usehooks';
import gsap from 'gsap';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

  const containerRef = useRef<HTMLDivElement>(null);

  const isExpanded = useSelector(selectIsExpanded);
  const isToggled = useSelector(selectIsToggled);
  const dir = useSelector(selectDir);

  useEffect(() => {
    if (!isSmallDevice) {
      gsap.to(containerRef.current, {
        duration: 0.5,
        width: isExpanded ? 'calc(100vw - 19rem)' : 'calc(100vw - 7rem)',
        left: dir === 'ltr' ? (isExpanded ? '18rem' : '6rem') : '1rem',
        right: dir === 'rtl' ? (isExpanded ? '18rem' : '6rem') : '1rem',
        ease: 'power3.out',
      });
    } else {
      gsap.to(containerRef.current, {
        duration: 0.5,
        width: '100vw',
        left: 0,
        right: 0,
        ease: 'power3.out',
      });
    }
  }, [isExpanded, dir, isSmallDevice]);

  return (
    <main dir={dir}>
      <Sidebar
        className={cn(
          'absolute top-[1rem] z-50 h-[calc(100vh-2rem)] overflow-scroll'
        )}
        isExpanded={isExpanded}
        isToggled={isToggled}
        isSmallDevice={isSmallDevice}
        dir={dir}
        theme={theme as Theme}
      />
      <section
        ref={containerRef}
        className={cn(
          'absolute top-0 h-screen md:top-[1rem] md:h-[calc(100vh-2rem)]'
        )}
      >
        {children}
      </section>
    </main>
  );
};
export default PagesLayout;
