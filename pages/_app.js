import { useState } from 'react'
import Layout from '../components/layout/Layout'
import SideMenu from '../components/layout/SideMenu'
import { FilterContextProvider } from '../context/filter-context'
import LayoutProvider from '../context/layout-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const toggleSidemenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }

  return (
    <LayoutProvider>
      <FilterContextProvider>
        {<SideMenu isOpen={isSideMenuOpen} handleClose={() => setIsSideMenuOpen(false)} />}
        <Layout toggleSidebar={toggleSidemenu}>
          <Component {...pageProps} />
        </Layout>
      </FilterContextProvider>
    </LayoutProvider>
  )
}

export default MyApp
