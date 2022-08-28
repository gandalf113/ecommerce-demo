import { createContext, useState } from "react";

export const LayoutContext = createContext();

const LayoutProvider = props => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    }

    const toggleFilterMenu = () => {
        setIsFilterMenuOpen(false);
    }

    return (
        <LayoutContext.Provider value={{
            isSideMenuOpen, toggleSideMenu,
            isFilterMenuOpen, toggleFilterMenu
        }}>
            {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;