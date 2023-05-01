import {Post} from '@/pages/articles'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
type Props = {
  post: Post
  isMostRecent?: boolean
}
export function ArticlesCard({post, isMostRecent}: Props) {
  const [date, setDate] = useState<Date | null>(null)
  const router = useRouter()
  useEffect(() => {
    const dateGen = new Date(post.date)
    setDate(dateGen)
  }, [post.date])
  return (
    <motion.div
      onClick={() => router.push(`article/${post.slug}`)}
      whileHover={{
        scale: 1.01,
      }}
      transition={{duration: 0.5, type: 'spring'}}
      className='@container rounded-lg hover:cursor-pointer  '>
      <div className='grid w-fit transition ease-in-out items-center  @md:w-full @md:gap-x-4 @3xl:grid-cols-2'>
        <Image
          src={post.img}
          width={1000}
          height={1000}
          quality={100}
          className='mx-auto  h-full max-h-96 w-full aspect-square @md:rounded-lg object-cover @7xl:aspect-[3/2] transition ease-in-out'
          alt=''
        />
        <div className='flex h-fit  3xl:h-full @3xl:pr-4 flex-col justify-between space-y-4 py-6'>
          <div className=''>
            <div className=' w-fit bg-clip-text'>
              <h1 className='text-xl text-white font-bold tracking-wide @3xl:text-3xl'>
                {post.title}
              </h1>
            </div>
            <div className='text-xs font-semibold normal-case flex justify-between items-center text-slate-500'>
              <span>
                {date !== null &&
                  date
                    .toLocaleString('en-US', {dateStyle: 'full'})[0]
                    .toUpperCase() +
                    date.toLocaleString('en-US', {dateStyle: 'full'}).slice(1)}
              </span>
              {isMostRecent ? (
                <Link
                  href='#nodejs'
                  className={`${
                    post.tag.match('react')
                      ? 'bg-primary'
                      : post.tag.match('nodejs')
                      ? 'bg-green-500'
                      : 'bg-blue-500'
                  } py-[0.125rem] px-3 font-medium  text-xs rounded-full text-white`}>
                  {post.tag}
                </Link>
              ) : (
                <></>
              )}
            </div>
            <p className='3xl:text-base line-clamp-3 mt-4 text-sm font-medium leading-7 text-slate-300 @3xl:line-clamp-5 @3xl:leading-6'>
              {post.summary}
            </p>
          </div>
          <div className=' flex  items-center space-x-4'>
            <Image
              src={post.author.img}
              alt=''
              quality={100}
              width={500}
              height={500}
              className='w-9  rounded-full  @3xl:w-12'
            />
            <span className='text-xl text-slate-400 @3xl:hidden'>&middot;</span>
            <div className='flex flex-col'>
              <>
                <span className='font-semibold @3xl:text-sm'>
                  {`${post.author.name}`}
                </span>
                <span className='text-xs font-semibold'>{post.author.job}</span>
              </>
            </div>
          </div>
          <div className='text-slate-400 text-xs'>
            {post.coAuthors.length === 1 ? 'Co-author: ' : 'Co-authors: '}
            <span className='text-white font-semibold'>
              {post.coAuthors.length === 1 &&
                post.coAuthors.map(coAuthor => coAuthor.name)}
              {post.coAuthors.length > 1 &&
                post.coAuthors.map((coAuthor, i) => {
                  if (i === 0) {
                    return coAuthor.name + ','
                  } else if (i === post.coAuthors.length - 1) {
                    return ' and ' + coAuthor.name + '.'
                  } else if (i === post.coAuthors.length - 2) {
                    return ' ' + coAuthor.name + ' '
                  } else {
                    return ' ' + coAuthor.name + ','
                  }
                })}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
