import {BigLogo} from '@/assets/big-logo'
import {Button} from '@/components/Button'
import {AnimatePresence, motion} from 'framer-motion'
import {GetStaticProps} from 'next'
import Head from 'next/head'
import {useMediaQuery} from 'react-responsive'

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Lucas Laurentino',
    },
  }
}

export default function Home(props: {title: string}) {
  const {title} = props

  const show = useMediaQuery({query: '(min-width: 1024px)'})
  const bigLogoAnimation = {
    start: {
      scale: 0,
      opacity: 0,
    },
    showing: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
      display: 'none',
    },
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='max-w-7xl mx-auto relative min-h-[calc(100vh-4rem)] flex lg:pl-20 lg:pr-12 2xl:px-0 items-center justify-between'>
        <div className='flex flex-col justify-center  mx-auto lg:mx-0 w-fit  items-start'>
          <div className='bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-50'>
            <h1 className='font-neuzeit text-transparent mb-[0.125rem] text-4xl tracking-[-0.05rem] leading-[100%]'>
              Lucas Laurentino
            </h1>
          </div>
          <h3 className='font-biotif mb-4 text-2xl tracking-[-0.03rem]  text-slate-300'>
            Software Engineer
          </h3>

          <p className='leading-[120%] max-w-md mb-4 text-slate-300 text-start'>
            passionate about clean architecture
          </p>
          <Button variant='secondary' shadow='special' full>
            Contact-me
          </Button>
        </div>
        <AnimatePresence>
          <motion.div
            initial='start'
            animate={show ? ['start', 'showing'] : 'exit'}
            exit='exit'
            variants={bigLogoAnimation}
            className='pt-2'>
            <BigLogo />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}
