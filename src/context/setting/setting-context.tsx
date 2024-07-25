import { createContext, useContext } from "react";
import { SettingsContextProps } from "./types.ts";

export const SettingContext = createContext({} as SettingsContextProps);

export const useSettingContext = () => {
    const context = useContext(SettingContext);
    if (!context) {
        throw new Error();
    }

    return context;
};