import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import HeaderHome from '@/components/headers/home/HeaderHome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="AccesaConfig" content="Pagina de modificacion de dispositivos de accesa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderHome tipo="home"></HeaderHome>
      <main className={styles.main}>
        <h3>Pagina de </h3>
        <h1>Configuracion de Dispositivos</h1>
      </main>
    </>
  )
}
