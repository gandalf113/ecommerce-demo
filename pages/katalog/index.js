import React from 'react'
import ItemsList from '../../components/catalogue/ItemsList'
import { getAllItems } from '../../dummy-data'

const CataloguePage = ({ items }) => {
    return (
        <div className='p-8'>
            <ItemsList items={items} />
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