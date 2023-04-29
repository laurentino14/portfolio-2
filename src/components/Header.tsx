import Link from 'next/link'

export function Header() {
  return (
    <header className='h-16 flex items-center justify-center'>
      <nav className='flex items-center justify-center text-sm font-medium gap-2 sm:gap-10'>
        <Link
          className='hover:text-white  w-16 text-center'
          href='/articles'
          passHref>
          Articles
        </Link>
        <Link
          className='hover:text-white w-16 text-center'
          href='/projects'
          passHref>
          Projects
        </Link>
        <Link
          className='text-white pt-2 font-neuzeit text-5xl leading-[160%] w-16 text-center'
          href='/'
          passHref>
          L
        </Link>
        <Link
          className='hover:text-white w-16 text-center'
          href='/vision'
          passHref>
          Vision
        </Link>
        <Link
          className='hover:text-white w-16 text-center'
          href='/job'
          passHref>
          Job
        </Link>
      </nav>
    </header>
  )
}
