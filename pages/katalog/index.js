import React from 'react'
import ItemsList from '../../components/catalogue/ItemsList'
import SideFilters from '../../components/catalogue/SideFilters'
import { getAllItems } from '../../dummy-data'

const CataloguePage = ({ items }) => {
    return (
        <div className='p-4'>
            {/* <h1 className='text-2xl tracking-tight'>Przeglądaj dostępny towar</h1>
            <div className='my-6 border-t-2 border-neutral-200' /> */}

            <div className='flex'>
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