import { useState } from 'react'
import MobileFilterMenu from '../components/catalogue/MobileFilterMenu'
import Layout from '../components/layout/Layout'
import SideMenu from '../components/layout/SideMenu'
import SideMenus from '../components/layout/SideMenus'
import { FilterContextProvider } from '../context/filter-context'
import LayoutProvider from '../context/layout-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <LayoutProvider>
      <FilterContextProvider>
        {/* MOBILE SIDEBARS */}
        <SideMenus />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FilterContextProvider>
    </LayoutProvider>
  )
}

export default MyApp
