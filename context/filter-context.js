import { createContext, useState } from "react";
import { getCategories } from "../dummy-data";
import { appendElement, removeElement } from "../utils/shared-utils";

export const CATEGORY_FILTERS = getCategories()
export const SIZE_FILTERS = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const FilterContext = createContext();

const initialState = {
    sex: 'any', // any/male/female/baby
    category: CATEGORY_FILTERS,
    size: SIZE_FILTERS,
}

export const FilterContextProvider = props => {
    const [filters, setFilters] = useState(initialState);

    /**
     * Włącza filtr jeżeli jest wyłączony i odwrotnie
     * @param {String} key - klucz filtra, np. category/size/...
     * @param {String} filter - filtr do dodania/usunięcia, np. T-Shirt, XS, ...
     */
    const toggleFilter = (key, filter) => {
        const array = filters[key];

        let newArray = [];

        if (array.includes(filter)) {
            newArray = removeElement(array.findIndex(item => item === filter), array);
        } else {
            newArray = appendElement(filter, array);
        }

        setFilters({
            ...filters,
            [key]: newArray
        })
    }

    const clearAllFilters = () => {
        setFilters(initialState);
    }

    const setSexFilter = (sex, clearAll = false) => {
        const newFilters = clearAll ? initialState : filters
        setFilters({
            ...newFilters,
            sex: sex
        })
    }

    const selectChosenFilters = (key, filters) => {
        setFilters({
            ...initialState,
            [key]: filters
        })
    }

    const toggleSelectAll = (key, isEverythingSelected) => {
        if (isEverythingSelected) {
            // Unselect all
            setFilters({
                ...filters,
                [key]: []
            })
        } else {
            // Select all
            setFilters({
                ...filters,
                [key]: initialState[key]
            })
        }
    }

    return (
        <FilterContext.Provider value={{
            filters, toggleFilter, toggleSelectAll, selectChosenFilters, setSexFilter, clearAllFilters
        }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContext;