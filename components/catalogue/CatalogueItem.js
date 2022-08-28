import React from 'react'

const CatalogueItem = ({ item }) => {
  return (
    <div className='group space-y-3 overflow-hidden '>
      <div className='overflow-hidden '>
        <img src={item.image} alt="" className='object-cover  group-hover:scale-105 duration-200' />
      </div>
      <div>
        <p className='text-sm font-light group-hover:underline underline-offset-2'>{item.name}</p>
        <p className='text-lg'>{item.price.toFixed(2)} zł</p>
      </div>
    </div>
  )
}

export default CatalogueItem