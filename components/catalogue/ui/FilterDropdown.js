import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import FilterDropdownItem from './FilterDropdownItem'

const FilterDropdown = ({ title, filterOptions }) => {
    const [isOpen, setIsOpen] = useState();

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {/* Dropdown */}
            <div className='flex justify-between items-center mb-2 cursor-pointer' onClick={toggleIsOpen}>
                <h5>{title}</h5>
                {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>


            {/* Dropdown items */}
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                {filterOptions.map((item, index) => (
                    <FilterDropdownItem key={index} filter={item} />
                ))}
            </div>
        </div>
    )
}

export default FilterDropdown