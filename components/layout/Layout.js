import React, { Fragment } from 'react'
import Footer from '../ui/Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            {/* <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{type:'tween', delay: 2}}
                className='fixed z-30 flex items-center justify-center bottom-0 w-full h-6 px-4 bg-red-600 text-white text-center'>
                <p>Strona w trakcie produkcji!</p>
            </motion.div> */}
        </Fragment>
    )
}

export default Layout