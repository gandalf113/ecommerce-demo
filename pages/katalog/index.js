import Head from 'next/head'
import React, { useContext } from 'react'
import { MdFilterAlt } from 'react-icons/md'
import ItemsList from '../../components/catalogue/ItemsList'
import SideFilters from '../../components/catalogue/SideFilters'
import FilterContext from '../../context/filter-context'
import { LayoutContext } from '../../context/layout-context'
import { getAllItems } from '../../dummy-data'

const checkItemForCategory = (item, filters) => {
    return item['categories'].some(category => filters['category'].includes(category));
}

const checkItemForSex = (item, filters) => {
    if (filters['sex'] === 'any') return true;
    return item['sex'] === filters['sex'];
}

const checkItemForSize = (item, filters) => {
    if (item['size'] === null) return true;
    return filters['size'].includes(item['size']);
}


const CataloguePage = ({ items }) => {
    const { filters } = useContext(FilterContext);
    const { toggleFilterMenu } = useContext(LayoutContext);

    const filterItems = () => {
        let filteredItems = items.filter(item => (
            checkItemForCategory(item, filters) &&
            checkItemForSex(item, filters)) &&
            checkItemForSize(item, filters)
        )
        return filteredItems
    }

    return (
        <div className='p-4'>
            <Head>
                <title>Katalog produktów</title>
                <meta name='description' content='Markowe ubrania second hand' />
            </Head>
            {/* <h1 className='text-3xl tracking-tight font-extralight mb-4'>Przeglądaj dostępny towar</h1> */}
            {/* <div className='my-4 border-t-2 border-neutral-200' /> */}
            {/* <p>Active filters: {JSON.stringify(filters)}</p> */}

            {/* Mobile filters */}
            <div className='sm:hidden block'>
                <button className='flex items-center gap-x-1 mb-2 text-gray-600'
                    onClick={toggleFilterMenu}>
                    <MdFilterAlt />
                    Filtruj
                </button>
            </div>
            <div className='sm:hidden block my-4 border-t-2 border-neutral-200' />

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