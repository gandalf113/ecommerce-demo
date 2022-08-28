import React, { Fragment } from 'react'
import Footer from '../ui/Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout