import React, { useContext } from 'react'
import { LayoutContext } from '../../context/layout-context'
import SideMenu from './SideMenu';
import MobileFilterMenu from '../catalogue/MobileFilterMenu';

const SideMenus = () => {
    const { isSideMenuOpen, toggleSideMenu,
        isFilterMenuOpen, toggleFilterMenu } = useContext(LayoutContext);

    return (
        <div>
            <SideMenu isOpen={isSideMenuOpen} handleClose={toggleSideMenu} />
            <MobileFilterMenu isOpen={isFilterMenuOpen} handleClose={toggleFilterMenu} />
        </div>
    )
}

export default SideMenus