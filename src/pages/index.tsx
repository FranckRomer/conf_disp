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
        <section className={styles.welcome_contain}>
          <div>
            <h3 className={styles.subtitulo}>Pagina de </h3>
            <h1 className={styles.titulo}>Configuracion de Dispositivos</h1>
          </div>
          <div className={styles.welcome_img}>
            {/* <h1>Pagina de Accesa:</h1> */}
            {/* <a href="https://accesa.me/ ">
              <Image
                src="/imgs/AccesaPage.png"
                alt="Pagina oficial de accesa: https://accesa.me/"
                width={600}
                height={300}
              />
            </a> */}
            <Image
              src="/imgs/configuraciones.png"
              alt="Pagina oficial de accesa: https://accesa.me/"
              width={400}
              height={350}
            />
          </div>
        </section>
        <section className={styles.tarjetas_contain}>
          
          <Link href={"/projects/dana"} className={styles.tarjeta}>
            <div className={styles.tarjeta_img}>
              <Image
                src="/imgs/dana.png"
                alt="Pagina oficial de accesa: https://accesa.me/"
                width={200}
                height={200}
              />
            </div>
            <div className={styles.tarjeta_info}>
              <h1>Dana</h1>
              <p>Proyecto de TRAIN, se encuetran los dispositvos que hacen funcionar al monitoreo de camiones</p>
            </div>
          </Link>

          <Link href={"/projects/train/tellez"} className={styles.tarjeta}>
            <div className={styles.tarjeta_img}>
              <Image
                src="/imgs/train.png"
                alt="Pagina oficial de accesa: https://accesa.me/"
                width={200}
                height={200}
              />
            </div>
            <div className={styles.tarjeta_info}>
              <h1>Train</h1>
              <p>Pagina de monitoreo y configuracion de dispositivos para el proyecto de autobuses de Accesa</p>
            </div>
          </Link>

          
        </section>
      </main>
    </>
  )
}
