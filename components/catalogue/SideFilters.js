import React, { useContext } from 'react'
import FilterDropdown from './ui/FilterDropdown'
import FilterContext, { CATEGORY_FILTERS, SIZE_FILTERS } from '../../context/filter-context'
import SexFilterButton from './ui/SexFilterButton';

const SideFilters = () => {
    const { filters, toggleFilter, setSexFilter } = useContext(FilterContext);

    return (
        <div className='w-full font-light text-lg'>
            {/* Sex filter */}
            <div className='flex flex-col items-start'>
                <SexFilterButton sexFilter={filters['sex']} handleSetSexFilter={setSexFilter} sex='male' text="Mężczyzna" />
                <SexFilterButton sexFilter={filters['sex']} handleSetSexFilter={setSexFilter} sex='female' text="Kobieta" />
                <SexFilterButton sexFilter={filters['sex']} handleSetSexFilter={setSexFilter} sex='baby' text="Dziecko" />
            </div>

            <div className='my-2 border-t-2 border-neutral-300' />

            <FilterDropdown filterId='category' title='Kategoria' filterOptions={CATEGORY_FILTERS} />
            <div className='my-2 border-t-2 border-neutral-300' />
            <FilterDropdown filterId='size' title='Rozmiar' filterOptions={SIZE_FILTERS} />

        </div>
    )
}

export default SideFilters