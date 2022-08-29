import React from 'react'

const SexFilterButton = ({ sex, sexFilter, handleSetSexFilter, text }) => {

    return (
        <button className={`${sexFilter === sex ? 'bg-zinc-200' : 'bg-white hover:bg-zinc-100'} w-full text-left py-0.5 px-1`} onClick={() => {
            if (sex === sexFilter) handleSetSexFilter('any')
            else handleSetSexFilter(sex)
        }
        }>{text}</button>
    )
}

export default SexFilterButton