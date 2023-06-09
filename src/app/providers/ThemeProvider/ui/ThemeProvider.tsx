import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext, Theme } from '../lib/ThemeContext';

const LOCAL_STORAGE_THEME_KEY = 'theme'

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;
    const [isThemeInit, setThemeInit] = useState(false);

    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInit && initialTheme) {
            setTheme(initialTheme);
            setThemeInit(true);
        }
    }, [initialTheme, isThemeInit]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
