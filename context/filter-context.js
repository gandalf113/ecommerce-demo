import { createContext, useState } from "react";
import { appendElement, removeElement } from "../utils/shared-utils";

export const CATEGORY_FILTERS = ['T-Shirty', 'Płaszcz', 'Kurtki', 'Buty', 'Torba', 'Spodnie']
export const SIZE_FILTERS = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const FilterContext = createContext();

export const FilterContextProvider = props => {
    const [filters, setFilters] = useState(
        {
            category: CATEGORY_FILTERS,
            size: SIZE_FILTERS,
        }
    );

    /**
     * Dodaje filtr do wybranego klucza
     * @param {Array} array - lista filtrów, na których operujemy np. filters['category']
     * @param {String} filter - filtr do dodania np. T-Shirt, XS
     */
    const addFilter = (key, array, filter) => {
        const newArray = appendElement(filter, array);
        setFilters({
            ...filters,
            [key]: newArray
        })
    }

    /**
     * Usuwa filtr z wybranego klucza
     * @param {Array} array - lista filtrów, na których operujemy np. filters['category']
     * @param {String} filter - filtr do usunięcia np. T-Shirt, XS
     */
    const removeFilter = (array, filter) => {
        const newArray = removeElement(array.findIndex(filter), array);
        setFilters({
            ...filters,
            [key]: newArray
        })
    }

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

    return (
        <FilterContext.Provider value={{
            filters, toggleFilter
        }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContext;