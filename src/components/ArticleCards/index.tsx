import {Post} from '@/pages/articles'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {Badge} from '../Badge'
type Props = {
  post: Post
  i?: number
}
export function ArticlesCard({post, i}: Props) {
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
      className='@container rounded-lg hover:cursor-pointer'>
      <div
        className={
          i
            ? 'grid w-full grid-cols-9 max-h-40 gap-x-2 @sm:gap-x-3 @3xl:gap-x-5  @3xl:text-justify'
            : `grid w-fit transition ease-in-out items-center  @md:w-full @md:gap-x-4 @3xl:grid-cols-2`
        }>
        <Image
          src={post.img}
          width={1000}
          height={1000}
          quality={100}
          className={`${
            i !== undefined
              ? ' w-full grow col-span-3 @3xl:aspect-[3/2]  max-h-[8.8rem] @4xl:col-span-2 @3xl:w-full @3xl:h-40 @3xl:max-w-40 @3xl:max-h-40  @4xl:max-h-52 aspect-square rounded-lg object-cover  '
              : 'max-h-96 aspect-square rounded-lg object-cover @7xl:aspect-[3/2]'
          } mx-auto  h-fit    transition ease-in-out`}
          alt=''
        />
        <div
          className={`${
            i
              ? 'flex flex-col col-start-4 justify-center col-end-10 @4xl:col-start-3 @4xl:col-end-10'
              : 'flex h-fit 3xl:h-full @3xl:pr-4 flex-col justify-between space-y-4 pt-6'
          }  `}>
          <div className={`${i && 'flex flex-col'}`}>
            <div className=' w-fit bg-clip-text'>
              <h1
                className={`${
                  i ? 'text-base @3xl:text-base' : 'text-xl @3xl:text-3xl'
                }  text-white font-bold tracking-wide `}>
                {post.title}
              </h1>
            </div>
            <div
              className={`${
                i
                  ? ' items-center gap-4'
                  : ' flex-col gap-4 w-fit @xl:w-auto @xl:flex-row justify-between @xl:items-center'
              } text-xs font-semibold  flex text-slate-500`}>
              <span>
                {date !== null &&
                  date
                    .toLocaleString('en-US', {dateStyle: 'full'})[0]
                    .toUpperCase() +
                    date
                      .toLocaleString('en-US', {dateStyle: 'full'})
                      .slice(1)
                      .toLowerCase()}
              </span>
              <div className={`${i ? 'hidden' : 'relative'}`}>
                <Badge tag={post.tag} />
              </div>
            </div>

            <p
              className={`${
                i
                  ? ' text-xs my-1 line-clamp-2 @3xl:text-sm   @2xl:line-clamp-3  text-slate-300'
                  : ' line-clamp-3 mt-4 text-sm font-medium leading-7 @3xl:line-clamp-5 @3xl:leading-6 text-slate-300 '
              }`}>
              {post.summary}
            </p>
          </div>
          <div
            className={`${
              i ? 'flex-col items-start' : 'items-center space-x-4'
            } flex   `}>
            {!i && (
              <Image
                src={post.author.img}
                alt=''
                quality={100}
                width={500}
                height={500}
                className='w-9  rounded-full  @3xl:w-12'
              />
            )}
            <span
              className={`${i && 'hidden'} text-xl text-slate-400 @3xl:hidden`}>
              &middot;
            </span>
            <div
              className={`${
                i ? 'flex-row items-center space-x-2' : 'flex-col'
              } flex `}>
              <>
                {i && (
                  <span className='text-xs -mr-1 font-medium text-slate-400'>
                    {i ? 'Author:' : ''}
                  </span>
                )}
                <span
                  className={`${
                    i && '!text-xs'
                  } font-semibold text-white @3xl:text-sm`}>
                  {`${post.author.name}`}
                </span>
                {i && <span className=' hidden @3xl:block'>&middot;</span>}
                <span
                  className={`${
                    i && '!font-normal hidden @3xl:block text-slate-400'
                  } text-xs font-semibold`}>
                  {post.author.job}
                </span>
              </>
            </div>
          </div>
          <div className='text-slate-400 line-clamp-1 text-xs font-medium'>
            {post.coAuthors.length === 1 ? 'Co-author: ' : 'Co-authors: '}
            <span className='text-white font-semibold '>
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
