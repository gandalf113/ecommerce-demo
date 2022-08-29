import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SecondSection from '../components/landing/SecondSection'
import { useContext } from 'react'
import FilterContext from '../context/filter-context'

export default function Home() {
  const { clearAllFilters } = useContext(FilterContext);

  return (
    <div className='space-y-4'>
      <Head>
        <title>Używana odzież markowa</title>
        <meta name='description' content='Sklep z odzieżą używaną'/>
      </Head>
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
              <div
                onClick={clearAllFilters}
                className='rounded px-8 py-4 text-xl tracking-wider ring-1 hover:ring-2 ring-zinc-200 duration-200 text-white cursor-pointer w-fit'>
                Katalog
              </div>
            </Link>

          </motion.div>
        </div>
      </section>

      {/* Drugi blok */}
      <section className='md:w-10/12 m-auto px-6'>
        <SecondSection />
      </section>

    </div>
  )
}