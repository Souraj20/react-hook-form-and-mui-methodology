export type SettingsValueProps = {
    themeStretch: boolean;
    themeMode: 'light' | 'dark';
    themeDirection: 'rtl' | 'ltr';
    themeContrast: 'default' | 'bold';
    themeLayout: 'vertical' | 'horizontal' | 'mini';
    themeColorPresets: 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';
};

export type SettingsContextProps = SettingsValueProps & {
    onUpdate: (name: string, value: string | boolean) => void;
    canReset: boolean;
    onChangeDirectionByLang: (lang: string) => void;
    onReset: VoidFunction;
    open: boolean;
    onToggle: VoidFunction;
    onClose: VoidFunction;
};