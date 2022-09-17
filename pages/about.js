import Head from 'next/head'
import Link from 'next/link'
import Layout  from '../components/Layout'

const About = () => {
  return (
    <>
        <Layout
            page='About Us'
        >
            <h1>About Us</h1>
        </Layout>
        
        <Link href="/">Go to Home</Link>
    </>
    
  )
}

export default About