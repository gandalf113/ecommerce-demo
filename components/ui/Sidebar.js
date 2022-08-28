import React from 'react'
import Backdrop from '../layout/Backdrop'
import { AnimatePresence, motion } from 'framer-motion'

const Sidebar = ({ isOpen, handleClose, children }) => {
    return (
        <AnimatePresence mode='wait'>
            {isOpen && <Backdrop onClick={handleClose}>
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100vw' }}
                    transition={{ type: 'tween' }}

                    onClick={(e) => e.stopPropagation()}
                    className='fixed h-screen right-0 bg-white w-[70vw]'>
                    {children}
                </motion.div>
            </Backdrop>}
        </AnimatePresence>
    )
}

export default Sidebar