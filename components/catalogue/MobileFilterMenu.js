import React from 'react'
import Sidebar from '../ui/Sidebar'
import SideFilters from './SideFilters'

const MobileFilterMenu = ({ isOpen, handleClose }) => {
    return (
        <Sidebar isOpen={isOpen} handleClose={handleClose}>
            <div className=''>
            <SideFilters />

            </div>
        </Sidebar>
    )
}

export default MobileFilterMenu