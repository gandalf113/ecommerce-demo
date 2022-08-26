import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

const FilterDropdownItem = ({ filter, handleClick, isActive, all }) => {
    return (
        <div className='flex text-gray-500 items-center gap-x-2 font-extralight cursor-pointer hover:bg-zinc-100'
        onClick={handleClick}>
            {
                isActive ?
                    <MdCheckBox size={18} /> :
                    <MdCheckBoxOutlineBlank size={18} />
            }
            <p>{filter}</p>
        </div>
    )
}

export default FilterDropdownItem