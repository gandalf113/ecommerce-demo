import React from 'react'

const CatalogueItem = ({ item }) => {
  return (
    <div className=''>
      <img src={item.image} alt="" className='rounded-lg my-2'/>
      <p className='text-sm font-light'>{item.name}</p>
      <p className='text-lg'>{item.price.toFixed(2)} zł</p>
    </div>
  )
}

export default CatalogueItem