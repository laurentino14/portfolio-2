import {GitHubLogoIcon} from '@radix-ui/react-icons'
import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'
import {useState} from 'react'
import {Button} from '../Button'

export function Header() {
  const [active, setActive] = useState('home')
  const tabs = [
    {id: 'articles', label: 'Articles'},
    {id: 'projects', label: 'Projects'},
    {id: 'vision', label: 'Vision'},
    {id: 'job', label: 'Job'},
  ]
  return (
    <header className='h-16  flex items-center justify-center md:justify-between mx-auto max-w-7xl'>
      <div className='gap-2 sm:gap-10 flex items-center justify-start'>
        <Link href='/' passHref>
          <button
            onClick={() => setActive('home')}
            className='text-3xl rounded-md text-white font-neuzeit bg-[#ee4055] px-3'>
            L
          </button>
        </Link>
        <nav className='flex items-center justify-center text-sm font-medium gap-2 sm:gap-10'>
          {tabs.map(item => {
            return (
              <Link key={item.id} href={`/${item.id === 'l' ? '/' : item.id}`}>
                <button
                  key={item.id}
                  onClick={() => {
                    setActive(item.id)
                  }}
                  className={` hover:text-white  py-1 px-3   text-center relative transition`}>
                  <AnimatePresence>
                    {active === item.id && (
                      <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        layoutId={'header-active-pill'}
                        style={{
                          borderRadius: 9999,
                          z: active === 'l' ? 0 : undefined,
                        }}
                        className={` bg-neutral-200/10 absolute   inset-0`}
                      />
                    )}
                  </AnimatePresence>
                  <span
                    className={`${
                      item.id === active
                        ? 'text-white mix-blend-luminosity'
                        : 'text-slate-400'
                    }  z-20 relative transition`}>
                    {item.label}
                  </span>
                </button>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className='hidden  md:block'>
        <Button className='' variant='transparent' size='undefined' asChild>
          <Link href='https://github.com/laurentino14' target='_blank'>
            <GitHubLogoIcon width={25} height={25} />
          </Link>
        </Button>
      </div>
    </header>
  )
}
