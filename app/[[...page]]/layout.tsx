'use client';

import { Sidebar } from '@/components/Sidebar';
import {
  selectDir,
  selectIsExpanded,
  selectIsToggled,
} from '@/state/slices/config';
import { cn } from '@/utils/classNames';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useTheme } from 'next-themes';
import { useSelector } from 'react-redux';

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

  const isExpanded = useSelector(selectIsExpanded);
  const isToggled = useSelector(selectIsToggled);
  const dir = useSelector(selectDir);

  return (
    <main dir={dir}>
      <Sidebar
        className={cn(
          'absolute top-[1rem] z-50 h-[calc(100vh-2rem)] transition-[width] duration-300',
          {
            'left-[1rem]': dir === 'ltr',
            'right-[1rem]': dir === 'rtl',
            'transition-transform duration-300 ease-in-out will-change-transform':
              isSmallDevice,
            '-translate-x-[20rem]':
              dir === 'ltr' && isSmallDevice && !isToggled,
            'translate-x-0': isSmallDevice && isToggled,
            'translate-x-[20rem]': dir === 'rtl' && isSmallDevice && !isToggled,
          },
          isExpanded ? 'w-[16rem]' : 'w-[4rem]'
        )}
        isExpanded={isExpanded}
        dir={dir}
        theme={theme as 'light' | 'dark'}
      />
      <section
        className={cn(
          'transition-[left width] absolute top-0 h-screen duration-300 md:top-[1rem] md:h-[calc(100vh-2rem)]',
          isExpanded
            ? {
                'left-0 w-screen md:left-[18rem] md:w-[calc(100vw-19rem)]':
                  dir === 'ltr',
                'left-0 w-screen md:right-[18rem] md:w-[calc(100vw-19rem)]':
                  dir === 'rtl',
              }
            : {
                'left-0 w-screen md:left-[6rem] md:w-[calc(100vw-7rem)]':
                  dir === 'ltr',
                'left-0 w-screen md:right-[6rem] md:w-[calc(100vw-7rem)]':
                  dir === 'rtl',
              }
        )}
      >
        {children}
      </section>
    </main>
  );
};
export default PagesLayout;
