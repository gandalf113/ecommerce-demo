import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CategoryBlock from '../components/ui/CategoryBlock'
import { motion } from 'framer-motion'
import CatalogueItem from '../components/catalogue/CatalogueItem'
import { getAllItems } from '../dummy-data'

export default function Home() {
  return (
    <div className='space-y-4'>
      {/* Pierwszy blok */}
      <section className='relative h-screen flex text-zinc-200'>
        {/* Tło */}
        <Image className=' brightness-[0.2]
        select-none pointer-events-none object-cover object-center'
          src='/img/bg_clothes.jpg' alt='tanie ubrania'
          width={800} height={600} layout='fill' objectFit='cover' />

        {/* Tekst */}
        <div className='flex z-10 flex-col px-12 md:mt-48 mt-10 lg:w-1/2 md:w-3/5 w-full
        m-auto items-center text-center'>
          {/* Pierwsza kolumna */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className='mb-3 text-4xl uppercase tracking-widest'>SKLEP z Odzieżą używaną</h1>

            <div className='text-xl font-light'>
              Cras vestibulum, justo quis accumsan euismod, felis nibh cursus nunc, vitae ultricies neque nisi vitae lacus. Nullam efficitur, erat eu rhoncus pellentesque, diam ex scelerisque nisi, vitae hendrerit ex felis et nibh.
            </div>

          </motion.div>
          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='flex justify-center gap-4 md:mt-10 mt-4'>
            <Link href='/katalog'>
              <div className='rounded px-8 py-4 text-xl tracking-wider ring-1 hover:ring-2 ring-zinc-200 duration-200 text-white cursor-pointer w-fit'>
                Katalog
              </div>
            </Link>

          </motion.div>
        </div>
      </section>

      {/* Drugi blok */}
      <section className='md:w-10/12 m-auto px-6'>
        <motion.div
          initial={{ opcaity: 0 }}
          whileInView={{ opacity: 1 }}
          className='text-center w-1/2 m-auto space-y-4 my-12'>
          <h3 className='text-4xl'>Znajdź coś dla siebie</h3>
          <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare malesuada elit, sit amet porttitor tortor luctus at. </p>
        </motion.div>

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
        <div className='grid grid-flow-col-dense gap-4 md:grid-rows-1 grid-rows-2 pb-24'>
          <CategoryBlock rowSpan={1} image='/img/catalogue_woman.jpg' text='Kobieta' />
          <CategoryBlock rowSpan={1} image='/img/catalogue_man.jpg' text='Mężczyzna' />
          <CategoryBlock rowSpan={1} image='/img/catalogue_child_alt.jpg' text='Dziecko' />
          <CategoryBlock rowSpan={1} image='/img/catalogue_shoes_alt.jpg' text='Obuwie' />
        </div>

      </section>

    </div>
  )
}