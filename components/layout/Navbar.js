import React from 'react'
import NavItem from '../ui/NavItem'
import { SiFacebook } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'

const NAVIGATION = [
    {
        title: "Strona główna",
        link: "/"
    },
    {
        title: "Katalog",
        link: "/katalog"
    },
    {
        title: "O nas",
        link: "/onas"
    },
    {
        title: "Kontakt",
        link: "/kontakt"
    },
    {
        title: "Sprzedaj",
        link: "/sprzedaj"
    },
]

const Navbar = () => {
    return (
        <div className='z-20 w-full flex justify-between items-center shadow h-16 px-8 bg-zinc-50'>
            {/* Main navigation */}
            <div className='md:flex gap-x-8 hidden'>
                {NAVIGATION.map((nav, index) => (
                    <NavItem key={index} link={nav.link} text={nav.title} />
                ))}
            </div>

            {/* Icons */}
            <div className='flex items-center gap-x-4'>
                <SiFacebook size={24} />
                <AiFillInstagram size={30} />
            </div>
        </div>
    )
}

export default Navbar