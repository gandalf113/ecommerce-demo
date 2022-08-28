import React from 'react'
import Image from 'next/image'

const CategoryBlock = ({ rowSpan, image, text }) => {
    return (
        <div className={`group relative overflow-hidden cursor-pointer
        ${rowSpan === 2 ? 'row-span-2' : 'row-span-1'}`}>
            <Image width={400} height={600} src={image} alt={text} className='object-cover
            group-hover:scale-105  duration-500' />
            <p className='text-xl'>{text}</p>
            {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            uppercase font-bold text-white select-none
            group-hover:opacity-100 opacity-0 duration-200'>
                <h1 className='text-3xl'>{text}</h1>
            </div> */}
            {/* <div className='absolute h-1/6 w-full z-10 bottom-1.5 bg-zinc-50 bg-opacity-80 p-2'>
            </div> */}
        </div>

    )
}

export default CategoryBlock