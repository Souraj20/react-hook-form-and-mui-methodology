import isEqual from 'lodash/isEqual';
import { SettingsValueProps } from "./types.ts";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../../hooks/use-local-storage.ts";
import { SettingContext } from "./setting-context.tsx";
import { localStorageGetItem } from "../../utils/storage-available.ts";

type SettingsProviderProps = {
    children: React.ReactNode;
    defaultSettings: SettingsValueProps;
};

export function SettingProvider({ defaultSettings, children }: SettingsProviderProps) {
    const [openDrawer, setOpenDrawer] = useState(false);

    const [settings, setSettings] = useLocalStorage('settings', defaultSettings);

    const isArabic = localStorageGetItem('i18nextLng') === 'ar';

    useEffect(() => {
        if (isArabic) {
            onChangeDirectionByLang('ar');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isArabic]);

    const onUpdate = useCallback(
        (name: string, value: string | boolean) => {
            setSettings((prevState: SettingsValueProps) => ({
                ...prevState,
                [name]: value,
            }));
        },
        [setSettings],
    );

    const onChangeDirectionByLang = useCallback(
        (lang: string) => {
            onUpdate('themeDirection', lang === 'ar' ? 'rtl' : 'ltr');
        },
        [onUpdate],
    );

    const onReset = useCallback(() => {
        setSettings(defaultSettings);
    }, [defaultSettings, setSettings]);

    const onToggleDrawer = useCallback(() => {
        setOpenDrawer((prev) => !prev);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const canReset = !isEqual(settings, defaultSettings);

    const memorizeValue = useMemo(() => ({
        ...settings,
        onChangeDirectionByLang,
        onUpdate,
        canReset,
        onReset,
        open: openDrawer,
        onToggle: onToggleDrawer,
        onClose: onCloseDrawer,
    }), [
        onReset,
        onUpdate,
        settings,
        canReset,
        openDrawer,
        onCloseDrawer,
        onChangeDirectionByLang,
        onToggleDrawer,
    ]);

    return <SettingContext.Provider value={ memorizeValue }>{ children }</SettingContext.Provider>
}