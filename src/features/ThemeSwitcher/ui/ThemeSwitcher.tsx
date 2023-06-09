import React, { memo } from 'react';
// import LightIcon from '@/shared/assets/icons/theme-light.svg';
// import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { useTheme } from '../../../app/providers/ThemeProvider/lib/useTheme';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={classNames('', {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? 'Dark' : 'Light'}
    </button>
  );
});
