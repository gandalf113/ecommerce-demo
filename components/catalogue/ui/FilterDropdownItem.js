import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

const FilterDropdownItem = ({ filter, handleClick, all=false }) => {
    return (
        <div className='flex items-center gap-x-2 font-extralight' onClick={handleClick}>
            {
                all ?
                <MdCheckBox size={16} /> :
                <MdCheckBoxOutlineBlank size={16} />
            }
            <p>{filter}</p>
        </div>
    )
}

export default FilterDropdownItem