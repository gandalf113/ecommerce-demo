import React, { useContext, useEffect, useState } from 'react'
import ItemsList from '../../components/catalogue/ItemsList'
import SideFilters from '../../components/catalogue/SideFilters'
import FilterContext from '../../context/filter-context'
import { getAllItems } from '../../dummy-data'

const checkItemForCategory = (item, filters) => {
    return item['categories'].some(category => filters['category'].includes(category));
}

const checkItemForSex = (item, filters) => {
    if (filters['sex'] === 'any') return true;
    return item['sex'] === filters['sex'];
}


const CataloguePage = ({ items }) => {
    const { filters } = useContext(FilterContext);

    const filterItems = () => {
        let filteredItems = items.filter(item => (
            checkItemForCategory(item, filters) &&
            checkItemForSex(item, filters))
        )
        return filteredItems
    }

    return (
        <div className='p-4'>
            {/* <h1 className='text-3xl tracking-tight font-extralight mb-4'>Przeglądaj dostępny towar</h1> */}
            {/* <div className='my-4 border-t-2 border-neutral-200' /> */}
            {/* <p>Active filters: {JSON.stringify(filters)}</p> */}

            <div className='grid grid-cols-10'>
                <div className='lg:col-span-2 col-span-3 sm:block hidden'>
                    <SideFilters />
                </div>
                <div className='md:px-8 lg:col-span-8 sm:col-span-7 col-span-10 w-full'>
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