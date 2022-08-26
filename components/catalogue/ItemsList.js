import React from 'react'
import CatalogueItem from './CatalogueItem'

const ItemsList = ({ items }) => {
    if(items.length === 0) {
        return (
            <p className='text-2xl'>Żaden produkt nie spełnia podanych kryteriów</p>
        )
    }

    return (
        <div className='grid grid-cols-6 gap-8'>
            {items.map(item => (
                <CatalogueItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ItemsList