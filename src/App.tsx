import React, { useState } from 'react'
import { useTheme } from './app/providers/ThemeProvider/lib/useTheme'
import { classNames } from './shared/lib/classNames/classNames'
import { ThemeSwitcher } from './features/ThemeSwitcher'
import MainPage from './pages/MainPage'
import ToggleSwitch from './shared/ui/ToggleSwitch/ToggleSwitch'

function App() {
    const { theme } = useTheme()

    let [newsletter, setNewsletter] = useState(false)
    const onNewsletterChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setNewsletter(checked)
    }

    return (
        <div className={classNames('app pc', {}, [theme])}>
            <header className='header'>
                <div className='container header__inner'>
                    <p>Kamil Kuchaev</p>
                    <ThemeSwitcher />
                </div>

                {/*<div>*/}
                {/*  <ToggleSwitch id='newsletter' checked={newsletter} onChange={onNewsletterChange} />*/}
                {/*  <label htmlFor='newsletter'>Send me Marketing Emails!</label>*/}
                {/*</div>*/}
            </header>

            <MainPage />

            <footer className='footer'>
                <div className='container footer__inner'>copyright © Kamil Kuchaev - 2023</div>
            </footer>
        </div>
    )
}

export default App
