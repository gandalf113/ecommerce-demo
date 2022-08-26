import React, { useContext, useEffect, useState } from 'react'
import ItemsList from '../../components/catalogue/ItemsList'
import SideFilters from '../../components/catalogue/SideFilters'
import FilterContext from '../../context/filter-context'
import { getAllItems } from '../../dummy-data'

const checkItemForCategory = (item, filters) => {
    return item['categories'].some(category => filters['category'].includes(category));
}


const CataloguePage = ({ items }) => {
    const { filters } = useContext(FilterContext);

    const filterItems = () => {
        let filteredItems = items.filter(item => checkItemForCategory(item, filters))
        return filteredItems
    }

    return (
        <div className='p-4'>
            {/* <h1 className='text-2xl tracking-tight'>Przeglądaj dostępny towar</h1>
            <div className='my-6 border-t-2 border-neutral-200' /> */}
            {/* <p>Active filters: {JSON.stringify(filters)}</p> */}

            <div className='flex'>
                <SideFilters />
                <div className='px-8'>
                    <ItemsList items={filterItems()} />

                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const items = getAllItems();

    return {
        props: {
            items: items
        }
    }
}

export default CataloguePage