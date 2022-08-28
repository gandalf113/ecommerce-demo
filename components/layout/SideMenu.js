import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Sidebar from '../ui/Sidebar'
import { NAVIGATION } from './Navbar'
import Link from 'next/link'

const SideMenu = ({ isOpen, handleClose }) => {
    return (
        <Sidebar isOpen={isOpen} handleClose={handleClose}>
            <div className='p-4 space-y-3'>
                {NAVIGATION.map(nav => (
                    <p onClick={handleClose}>
                        <Link href={nav.link}>{nav.title}</Link>
                    </p>
                ))}
            </div>
        </Sidebar>
    )
}

export default SideMenu