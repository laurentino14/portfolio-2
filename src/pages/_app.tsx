import {Header} from '@/components/Header'
import '@/styles/globals.css'
import '@/styles/prism.css'
import '@/styles/styles.css'
import type {AppProps} from 'next/app'
import {Fira_Mono} from 'next/font/google'
const firacode = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  variable: '--font-firacode',
})
export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <main className={`${firacode.variable} px-8 2xl:px-0`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}
