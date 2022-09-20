import Layout  from '../components/Layout'
import Image from 'next/Image'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <>
        <Layout
            page='About Us'
        >
            <main className='container'>
              <h2 className='heading'>About Us</h2>
              <div className={styles.content}>
                  <Image layout="responsive" width={600} height={400} src="/img/nosotros.jpg" alt="About us image" />
                  
                  <div>
                    <p>
                      As a company made up of musicians and music lovers, we're
                      driven by our shared belief that music is the greatest unifying force in the world.
                      And that idea fuels our mission to fill the world with music.
                      To give people the tools they need to create and connect.
                      To be seen and heard. 
                      <p>And recently, to help and to heal.
                      Music can stir the soul and change the frequency of the planet. So let's make some noise.
                      Because the world needs to hear what you have to play.</p>
                    </p>
                  </div>
              </div>
            </main>
        </Layout>
        
    </>
    
  )
}

export default About