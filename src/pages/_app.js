import '@/sass/main.scss';
import Head from 'next/head';
import { Nunito } from '@next/font/google';
const nunito = Nunito({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Casual Meetup Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={nunito.className} >
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}

