import React from 'react'
import FilterDropdown from './ui/FilterDropdown'

const CATEGORY_FILTERS = ['Wszystko', 'T-Shirty', 'Płaszcze', 'Kurtki', 'Buty', 'Torby', 'Spodnie']
const SIZE_FILTERS = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const SideFilters = () => {

    return (
        <div className='w-3/4 font-light text-lg'>
            {/* Sex filter */}
            <div className='flex flex-col items-start'>
                <button>Mężczyzna</button>
                <button>Kobieta</button>
                <button>Dziecko</button>
            </div>

            <div className='my-2 border-t-2 border-neutral-300' />

            <FilterDropdown filterId='category' title='Kategoria' filterOptions={CATEGORY_FILTERS} />
            <div className='my-2 border-t-2 border-neutral-300' />
            <FilterDropdown filterId='size' title='Rozmiar' filterOptions={SIZE_FILTERS} />

        </div>
    )
}

export default SideFilters