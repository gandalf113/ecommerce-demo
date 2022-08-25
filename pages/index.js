import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex text-white'>
      {/* Tło */}
      <img className='fixed -z-10 w-screen h-screen brightness-[0.25] select-none pointer-events-none object-cover object-center'
        src='/img/bg_clothes.jpg' alt='bg' />

      {/* Tekst */}
      <div className='flex flex-col items-center m-auto md:mt-36 mt-10 text-center w-1/2'>
        {/* Pierwsza kolumna */}
        <div>
          <h2 className='mb-3 text-4xl uppercase tracking-widest'>Znajdź coś dla siebie</h2>

          <div className='text-xl font-light'>
            Aliquam porttitor mauris ac sem cursus, ut rhoncus diam eleifend. Cras vestibulum, justo quis accumsan euismod, felis nibh cursus nunc, vitae ultricies neque nisi vitae lacus. Nullam efficitur, erat eu rhoncus pellentesque, diam ex scelerisque nisi, vitae hendrerit ex felis et nibh.
          </div>

        </div>
        <Link href='/'>
          <div className='rounded px-8 py-4 text-xl tracking-wider bg-teal-700 text-white cursor-pointer mt-8'>
            Katalog
          </div>
        </Link>
      </div>

    </div>
  )
}
