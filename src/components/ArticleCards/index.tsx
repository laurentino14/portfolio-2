import {motion} from 'framer-motion'
import Image from 'next/image'
import {useEffect, useState} from 'react'

export function ArticlesCard() {
  const [date, setDate] = useState<Date | null>(null)
  useEffect(() => {
    setDate(new Date())
  }, [])
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      transition={{duration: 0.5, type: 'spring'}}
      className='@container rounded-lg hover:cursor-pointer  '>
      <div className='grid w-fit transition ease-in-out items-center  @md:w-full @md:gap-x-4 @3xl:grid-cols-2'>
        <Image
          src='/tailwind.png'
          width={1000}
          height={1000}
          quality={100}
          className='mx-auto  h-full max-h-96 w-full aspect-square @md:rounded-lg object-cover @3xl:aspect-[3/2] transition ease-in-out'
          alt=''
        />
        <div className='flex h-fit  3xl:h-full @3xl:pr-4 flex-col justify-between space-y-4 py-6'>
          <div className=''>
            <div className=' w-fit bg-clip-text'>
              <h1 className='text-xl text-white font-bold tracking-wide @3xl:text-3xl'>
                Title card
              </h1>
            </div>
            <span className='text-xs font-semibold normal-case  text-slate-500'>
              {date !== null &&
                date
                  .toLocaleString('en-US', {dateStyle: 'full'})[0]
                  .toUpperCase() +
                  date.toLocaleString('en-US', {dateStyle: 'full'}).slice(1) +
                  ' - ' +
                  date.toLocaleString('en-US', {timeStyle: 'short'})}
            </span>
            <p className='3xl:text-base line-clamp-3 mt-4 text-sm font-medium leading-7 text-slate-300 @3xl:line-clamp-5 @3xl:leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              sunt id quis perspiciatis quae aspernatur obcaecati! Nemo alias,
              similique tempore laudantium eveniet cumque maxime id adipisci
              unde placeat? Voluptatem, fugiat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quidem sunt id quis perspiciatis
              quae aspernatur obcaecati! Nemo alias, similique tempore
              laudantium eveniet cumque maxime id adipisci unde placeat?
              Voluptatem, fugiat.
            </p>
          </div>
          <div className=' flex  items-center space-x-4'>
            <Image
              src='https://github.com/laurentino14.png'
              alt=''
              quality={100}
              width={500}
              height={500}
              className='w-9  rounded-full  @3xl:w-12'
            />
            <span className='text-xl text-slate-400 @3xl:hidden'>&middot;</span>
            <div className='flex flex-col'>
              <span className='font-semibold @3xl:text-sm'>
                Lucas Laurentino
              </span>
              <span className='text-xs font-semibold'>Software Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
