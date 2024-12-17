import { createContext, useState } from "react";
import { ContextProviderPropsType, ContextType } from "../types/context.type";

export const Context = createContext({} as ContextType);

export const ContextProvider: React.FC<ContextProviderPropsType> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [headerTextHeight, setHeaderTextHeight] = useState<number | null>(null);
    const [openingsComponentHeight, setOpeningsComponentHeight] = useState<number | null>(null);
    return (
        <Context.Provider value={{
            openMenu,
            setOpenMenu,
            headerTextHeight,
            setHeaderTextHeight,
            openingsComponentHeight,
            setOpeningsComponentHeight
        }}>
            {children}
        </Context.Provider>
    )
}