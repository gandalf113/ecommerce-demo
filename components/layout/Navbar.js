import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useContext } from 'react'
import NavItem from '../ui/NavItem'
import { SiFacebook } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { LayoutContext } from '../../context/layout-context'

export const NAVIGATION = [
    {
        title: "Strona główna",
        link: "/"
    },
    {
        title: "Katalog",
        link: "/katalog"
    },
    {
        title: "Kontakt",
        link: "/kontakt"
    },
]

const Navbar = () => {
    const { toggleSideMenu } = useContext(LayoutContext);
    const router = useRouter();
    const currentRoute = router.pathname;

    const isLinkActive = (link) => {
        return link === currentRoute;
    }

    return (
        <div className='z-10 w-full flex justify-between items-center shadow md:h-24 h-16 px-8 bg-zinc-50'>
            <div className='flex items-center gap-x-6'>
                <Link href='/'>
                    <h1 className='text-xl cursor-default select-none'>Komis OLUŚ</h1>
                </Link>
                {/* Main navigation */}
                <div className='md:flex gap-x-8 hidden text-sm'>
                    {NAVIGATION.map((nav, index) => (
                        <NavItem key={index} link={nav.link} text={nav.title} isActive={isLinkActive(nav.link)} />
                    ))}
                </div>
            </div>

            {/* Icons */}
            <div className='flex items-center gap-x-4'>
                <a href='https://www.facebook.com/komisolus/' target='_blank'
                    className='text-gray-500 hover:text-gray-600'>
                    <SiFacebook size={24} />
                </a>
                <a href='https://www.instagram.com/komis_olus_raciborz/' target='_blank'
                    className='text-gray-500 hover:text-gray-600'>
                    <AiFillInstagram size={30} />
                </a>
            </div>

            <button className='md:hidden block' onClick={toggleSideMenu}>
                <GiHamburgerMenu size={24} />
            </button>

        </div>
    )
}

export default Navbar