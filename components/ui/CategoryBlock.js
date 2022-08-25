import React from 'react'

const CategoryBlock = ({ rowSpan, image }) => {
    return (
        <div className={`md:h-full w-full overflow-hidden
        ${rowSpan === 2 ? 'row-span-2' : 'row-span-1'}`}>
            <img src={image} alt='' className='' />
        </div>

    )
}

export default CategoryBlock