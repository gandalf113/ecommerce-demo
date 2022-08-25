import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

const FilterDropdownItem = ({ filter, all=false }) => {
    return (
        <div className='flex items-center gap-x-2 font-extralight'>
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