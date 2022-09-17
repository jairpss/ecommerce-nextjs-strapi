import Head from 'next/head'

const Layout = ({children, page}) => {
  return (
    <div>
        <Head>
            <title>E-commerce App - {page}</title>
            <meta name="description" content="Musical Instruments Ecommerce" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Layout</h1>

        {children}
    </div>
  )
}

export default Layout