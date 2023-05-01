import {Header} from '@/components/Header'
import '@/styles/globals.css'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Header />
      <main className='px-8 2xl:px-0'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
