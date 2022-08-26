import Layout from '../components/layout/Layout'
import { FilterContextProvider } from '../context/filter-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <FilterContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FilterContextProvider>
  )
}

export default MyApp
