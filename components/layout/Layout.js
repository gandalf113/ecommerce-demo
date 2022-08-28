import React, { Fragment } from 'react'
import Navbar from './Navbar'

const Layout = ({ children, toggleSidebar }) => {
    return (
        <Fragment>
            <Navbar toggleSidebar={toggleSidebar} />
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default Layout