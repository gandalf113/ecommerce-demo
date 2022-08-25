import React from 'react'
import Link from 'next/link'

const NavItem = ({ text, link }) => {
    return (
        <Link href={link}>
            <div className='py-4 tracking-wider hover:underline cursor-pointer'>
                {text}
            </div>
        </Link>
    )
}

export default NavItem