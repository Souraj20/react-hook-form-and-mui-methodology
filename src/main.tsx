import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SettingProvider } from "./context/setting/setting-provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SettingProvider defaultSettings={ {
            themeMode: 'light',
            themeDirection: 'rtl',
            themeContrast: 'default',
            themeLayout: 'vertical',
            themeColorPresets: 'default',
            themeStretch: false,
        } }>
            <App/>
        </SettingProvider>
    </React.StrictMode>,
)
