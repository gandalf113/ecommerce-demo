import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import FilterContext from '../../context/filter-context';
import CatalogueItem from '../catalogue/CatalogueItem';
import CategoryBlock from '../ui/CategoryBlock';

import { getAllItems } from '../../dummy-data';

const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 }
};


const SecondSection = () => {
    const { setSexFilter, selectChosenFilters } = useContext(FilterContext);

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
        >
            <div
                className='text-center w-1/2 m-auto space-y-4 my-12'>
                <h3 className='text-4xl'>Znajdź coś dla siebie</h3>
                <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare malesuada elit, sit amet porttitor tortor luctus at. </p>
            </div>
            {/* Siatka z produktami */}
            <h3 className='text-2xl font-light tracking-wide mb-6'>Przeglądaj katalog</h3>
            <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 overflow-x-auto gap-4 mb-16'>
                <CatalogueItem item={getAllItems()[0]} />
                <CatalogueItem item={getAllItems()[1]} />
                <CatalogueItem item={getAllItems()[2]} />
                <CatalogueItem item={getAllItems()[3]} />
                <CatalogueItem item={getAllItems()[4]} />
            </div>
            <h3 className='text-2xl font-light tracking-wide mb-6'>Przeglądaj kategorie</h3>

            {/* Siatka z kategoriami (duże ekrany) */}
            <div className='grid grid-flow-col-dense gap-4 md:grid-rows-1 grid-rows-2 pb-2'>
                <CategoryBlock rowSpan={1} image='/img/catalogue_woman.jpg' text='Kobieta'
                    handleSetFilter={() => {
                        setSexFilter('female', true);
                    }} />
                <CategoryBlock rowSpan={1} image='/img/catalogue_man.jpg' text='Mężczyzna'
                    handleSetFilter={() => {
                        setSexFilter('male', true);
                    }}
                />
                <CategoryBlock rowSpan={1} image='/img/catalogue_child_alt.jpg' text='Dziecko'
                    handleSetFilter={() => {
                        setSexFilter('baby', true);
                    }} />
                <CategoryBlock rowSpan={1} image='/img/catalogue_shoes_alt.jpg' text='Obuwie'
                    handleSetFilter={() => {
                        selectChosenFilters('category', ['Buty']);
                    }} />
            </div>
        </motion.div>
    )
}

export default SecondSection