import React from 'react'

const SexFilterButton = ({ sex, sexFilter, handleSetSexFilter, text }) => {

    return (
        <button className={`${sexFilter === sex && 'italic'} hover:bg-zinc-100 w-full text-left`} onClick={() => {
            if (sex === sexFilter) handleSetSexFilter('any')
            else handleSetSexFilter(sex)
        }
        }>{sexFilter === sex && <span>•</span>} {text}</button>
    )
}

export default SexFilterButton