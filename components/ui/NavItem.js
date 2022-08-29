import React from 'react'
import Link from 'next/link'

const NavItem = ({ text, link, isActive }) => {
    return (
        <Link href={link}>
            <div className={`py-4 tracking-wider hover:underline underline-offset-2 cursor-pointer
            text-gray-600 hover:text-black ${isActive && 'underline'}`}>
                {text}
            </div>
        </Link>
    )
}

export default NavItem