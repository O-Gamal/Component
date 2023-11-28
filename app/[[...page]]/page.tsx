'use client';

import { Button } from '@/components/Button';
import { Switch } from '@/components/Switch';
import {
  selectDir,
  selectIsExpanded,
  setDir,
  setIsExpanded,
  setIsToggled,
} from '@/state/slices/config';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useTheme } from 'next-themes';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

  const isExpanded = useSelector(selectIsExpanded);
  const dir = useSelector(selectDir);

  const onToggleExpanded = () => {
    dispatch(setIsExpanded(!isExpanded));
  };

  const onToggleDir = () => {
    dispatch(setDir(dir === 'ltr' ? 'rtl' : 'ltr'));
  };

  const onToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <section className='h-full w-full space-y-4 overflow-clip rounded-lg bg-white p-4 shadow-lg ring-1 ring-neutral-200 dark:bg-neutral-800/50 dark:ring-neutral-800'>
      {isSmallDevice && (
        <Button
          size='sm'
          variant='secondary'
          rightIcon='caret'
          onClick={() => dispatch(setIsToggled(true))}
        >
          Toggle
        </Button>
      )}
      <Switch
        label='expanded'
        checked={isExpanded}
        onChange={onToggleExpanded}
      />
      <Switch label='RTL' checked={dir === 'rtl'} onChange={onToggleDir} />
      <Switch
        label='Dark theme'
        checked={theme === 'dark'}
        onChange={onToggleTheme}
      />
      <Button variant='outlined' color='success'>
        Test Button
      </Button>
    </section>
  );
}
