import React, { memo } from 'react';

import { useTheme } from '../../../app/providers/ThemeProvider/lib/useTheme';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from '../../../shared/lib/classNames/classNames';

import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <BsFillSunFill /> : <BsMoonFill />}
        </button>
    );
});
