'use client';

import { store } from '@/state/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </Provider>
  );
};
export default Providers;
