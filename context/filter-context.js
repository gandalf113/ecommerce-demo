import { createContext, useState } from "react";
import { appendElement, removeElement } from "../utils/shared-utils";

export const CATEGORY_FILTERS = ['T-Shirty', 'Płaszcz', 'Kurtka', 'Bluza', 'Buty', 'Torba', 'Spodnie']
export const SIZE_FILTERS = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const FilterContext = createContext();

export const FilterContextProvider = props => {
    const [filters, setFilters] = useState(
        {
            sex: 'any', // any/male/female/baby
            category: CATEGORY_FILTERS,
            size: SIZE_FILTERS,
        }
    );

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

    const setSexFilter = (sex) => {
        setFilters({
            ...filters,
            sex: sex
        })
    }

    return (
        <FilterContext.Provider value={{
            filters, toggleFilter, setSexFilter
        }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContext;