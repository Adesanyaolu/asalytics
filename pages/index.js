import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Description from '../components/Description'
import Algorands from '../components/Algorands'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'


export default function Home({ assets }) {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Asalytics Coding Assessment</title>
        <meta name="keyword" content="data analysis" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Description />
        <Algorands assets={assets} />
        
      </main>
    
      <footer className={styles.footer}>
        Copywright &#169; AdeSanyaOlu
      </footer>
    </div>
  )
}


// Fetching the data with Apollo Client from Grapghql
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://analytics-api.herokuapp.com/analytics/',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        asalist {
          result{
            logo
            name
            available
          }
      }
    }
    `
  });
  

  return {
    props: {
      assets: data.asalist.result
    }
  }
}