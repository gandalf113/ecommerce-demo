import React from 'react'

const SexFilterButton = ({ sex, sexFilter, handleSetSexFilter, text }) => {

    return (
        <button className={`${sexFilter === sex && 'font-bold'}`} onClick={() => {
            if (sex === sexFilter) handleSetSexFilter('any')
            else handleSetSexFilter(sex)
        }
        }>{text}</button>
    )
}

export default SexFilterButton