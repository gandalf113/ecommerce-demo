import React, { useContext, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import FilterContext from '../../../context/filter-context'
import FilterDropdownItem from './FilterDropdownItem'

const FilterDropdown = ({ filterId, title, filterOptions }) => {
    const [isOpen, setIsOpen] = useState();
    const { filters, toggleFilter, toggleSelectAll } = useContext(FilterContext);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const isItemActive = (filter) => {
        if (filters[filterId].includes(filter)) return true;
        return false;
    }

    const isEverythingSelected = (key) => {
        return filters[key].length === filterOptions.length;
    }

    return (
        <div>
            {/* Dropdown */}
            <div className='flex text-gray-400 hover:text-gray-700 justify-between items-center mb-2 px-1 cursor-pointer' onClick={toggleIsOpen}>
                <h5 className='text-gray-900'>{title}</h5>
                {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>


            {/* Dropdown items */}
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <FilterDropdownItem filter='Wszystko' all
                    isActive={isEverythingSelected(filterId)}
                    handleClick={() => toggleSelectAll(filterId, isEverythingSelected(filterId))} />
                {filterOptions.map((item, index) => (
                    <FilterDropdownItem
                        key={index}
                        filter={item}
                        isActive={isItemActive(item)}
                        handleClick={() => toggleFilter(filterId, item)} />
                ))}
            </div>
        </div>
    )
}

export default FilterDropdown