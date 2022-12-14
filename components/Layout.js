import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, page}) => {
  return (
    <div>
        <Head>
            <title>E-commerce App - {page}</title>
            <meta name="description" content="Musical Instruments Ecommerce" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />
        

        {children}

        <Footer />
    </div>
  )
}

export default Layout