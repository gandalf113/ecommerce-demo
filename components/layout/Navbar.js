import React from 'react'
import NavItem from '../ui/NavItem'

const NAVIGATION = [
    {
        title: "Strona główna",
        link: "/"
    },
    {
        title: "Katalog",
        link: "/"
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
        <div className='z-20 w-full flex gap-x-8 shadow h-16 px-8 bg-teal-500'>
            {NAVIGATION.map((nav, index)=> (
                <NavItem key={index} link={nav.link} text={nav.title}/>
            ))}
        </div>
    )
}

export default Navbar