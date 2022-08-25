import React from 'react'
import CatalogueItem from './CatalogueItem'

const ItemsList = ({ items }) => {
    return (
        <div className='grid grid-cols-6 gap-8'>
            {items.map(item => (
                <CatalogueItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ItemsList