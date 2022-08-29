import Head from 'next/head'
import Layout from '../components/layout/Layout'
import SideMenus from '../components/layout/SideMenus'
import { FilterContextProvider } from '../context/filter-context'
import LayoutProvider from '../context/layout-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <LayoutProvider>
      <FilterContextProvider>
        <Head>
          <title>Komis OLUŚ - sklep z odzieżą używaną</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

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
