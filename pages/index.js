import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CategoryBlock from '../components/ui/CategoryBlock'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='space-y-4'>
      {/* Pierwszy blok */}
      <section className='h-screen flex text-zinc-100'>
        {/* Tło */}
        <img className='absolute -z-10 w-screen h-screen brightness-[0.25]
        select-none pointer-events-none object-cover object-center'
          src='/img/bg_clothes.jpg' alt='' />

        {/* Tekst */}
        <div className='flex flex-col px-12 md:mt-48 mt-10 lg:w-1/2 md:w-3/5 w-full
        m-auto items-center text-center'>
          {/* Pierwsza kolumna */}
          <div>
            <h2 className='mb-3 text-4xl uppercase tracking-widest'>Znajdź coś dla siebie</h2>

            <div className='text-xl font-light'>
              Cras vestibulum, justo quis accumsan euismod, felis nibh cursus nunc, vitae ultricies neque nisi vitae lacus. Nullam efficitur, erat eu rhoncus pellentesque, diam ex scelerisque nisi, vitae hendrerit ex felis et nibh.
            </div>

          </div>
          {/* Actions */}
          <div className='flex justify-center gap-4 md:mt-10 mt-4'>
            <Link href='/katalog'>
              <div className='rounded px-8 py-4 text-xl tracking-wider bg-teal-600 text-white cursor-pointer w-fit'>
                Katalog
              </div>
            </Link>
            <Link href='/'>
              <div className='rounded px-8 py-4 text-xl tracking-wider ring-4 ring-teal-600 text-white cursor-pointer w-fit'>
                Kontakt
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Drugi blok */}
      <section className='md:px-12 px-6 h-screen'>
        <h3 className='text-2xl font-bold tracking-wide mb-6'>Przeglądaj kategorie</h3>
        {/* Siatka z kategoriami (duże ekrany) */}
        <div className='grid grid-flow-col-dense gap-4 md:grid-rows-1 grid-rows-2'>
          <CategoryBlock rowSpan={1} image='/img/catalogue_woman.jpg' text='Kobieta'/>
          <CategoryBlock rowSpan={1} image='/img/catalogue_man.jpg' text='Mężczyzna'/>
          <CategoryBlock rowSpan={1} image='/img/catalogue_child_alt.jpg' text='Dziecko'/>
          <CategoryBlock rowSpan={1} image='/img/catalogue_shoes_alt.jpg' text='Obuwie'/>
        </div>

        {/* Slider z kategoriami (małe ekrany) */}
        {/* <div className='flex gap-x-4 bg-gray-300 overflow-x-scroll'>
          <CategoryBlock rowSpan={2} image='/img/catalogue_woman.jpg' />
          <CategoryBlock rowSpan={1} image='/img/catalogue_child.jpg' />
          <CategoryBlock rowSpan={1} image='/img/catalogue_shoes.jpg' />
          <CategoryBlock rowSpan={2} image='/img/catalogue_man.jpg' />
        </div> */}
      </section>
    </div>

  )
}