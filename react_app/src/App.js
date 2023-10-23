import { useEffect, useState } from 'react';

// scrollbar
import 'simplebar-react/dist/simplebar.min.css';

// image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

// routes
import Router from 'src/routes/sections';
// theme
import ThemeProvider from 'src/theme';
// hooks
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
// components
import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';

import { zohoLinkStorageAvailable, zohoLinkStorageGetItem } from './utils/storage-available';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  useEffect(() => {}, []);
  return (
    <>
      <SettingsProvider
        defaultSettings={{
          themeMode: 'dark', // 'light' | 'dark'
          themeDirection: 'ltr', //  'rtl' | 'ltr'
          themeContrast: 'bold', // 'default' | 'bold'
          themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: 'red', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: true,
        }}
      >
        <ThemeProvider>
          <MotionLazy>
            <SettingsDrawer />
            <ProgressBar />
            <>
              <Router />
            </>
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </>
  );
}
