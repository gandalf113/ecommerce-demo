import React from 'react'
import Image from 'next/image'

const CatalogueItem = ({ item }) => {
  return (
    <div className='group space-y-1 overflow-hidden '>
      <div className='overflow-hidden '>
        <Image width={200} height={300} objectFit='cover' src={item.image} alt={item.name}
          className='group-hover:scale-105 duration-200' />
      </div>
      <div>
        <p className='text-sm font-light group-hover:underline underline-offset-2'>{item.name}</p>
        <p className='text-lg'>{item.price.toFixed(2)} zł</p>
      </div>
    </div>
  )
}

export default CatalogueItem