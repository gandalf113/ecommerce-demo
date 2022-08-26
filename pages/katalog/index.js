import React, { useContext } from 'react'
import ItemsList from '../../components/catalogue/ItemsList'
import SideFilters from '../../components/catalogue/SideFilters'
import FilterContext from '../../context/filter-context'
import { getAllItems } from '../../dummy-data'

const CataloguePage = ({ items }) => {
    const {filters} = useContext(FilterContext);

    return (
        <div className='p-4'>
            {/* <h1 className='text-2xl tracking-tight'>Przeglądaj dostępny towar</h1>
            <div className='my-6 border-t-2 border-neutral-200' /> */}
            <p>Active filters: {JSON.stringify(filters)}</p>

            <div className='flex mt-6'>
                <SideFilters />
                <div className='px-8'>
                    <ItemsList items={items} />

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