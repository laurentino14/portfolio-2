import {BigLogo} from '@/assets/big-logo'
import {AnimatePresence, motion} from 'framer-motion'
import {useMediaQuery} from 'react-responsive'
import Balance from 'react-wrap-balancer'

export default function Home() {
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
    <main className='max-w-7xl mx-auto relative min-h-[calc(100vh-4rem)] flex lg:pl-20 lg:pr-12 2xl:px-0 items-center justify-between'>
      <div className='flex flex-col w-full justify-center items-center lg:items-start'>
        <div className='bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-50'>
          <h1 className='font-neuzeit text-transparent mb-[0.125rem] text-4xl tracking-[-0.05rem] leading-[100%]'>
            Lucas Laurentino
          </h1>
        </div>
        <h3 className='font-biotif mb-4 text-2xl tracking-[-0.03rem]  text-grayText/90'>
          Software Engineer
        </h3>
        <p className='leading-[120%] max-w-md px-8 lg:px-0 text-center lg:text-start'>
          <Balance className='sm:hidden'>
            Hi guys, welcome to my universe !
            <br />
            Here you will find all my articles, projects, ideas and
            contributions to the community.
            <br />
            Feel free if you want to get closer and know a little more about me.
          </Balance>
        </p>
      </div>
      <AnimatePresence>
        <motion.div
          initial='start'
          animate={show ? ['initial', 'showing'] : 'exit'}
          exit='exit'
          variants={bigLogoAnimation}
          className='pt-2'>
          <BigLogo />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
