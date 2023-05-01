import {Badge} from '@/components/Badge'
import {convertMarkdownToHtml, getAllPosts, getPostBySlug} from '@/lib/article'
import {GetStaticPaths, GetStaticProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'

export default function Article({
  content,
  title,
  img,
  summary,
  date,
  tag,
}: {
  content: string
  summary: string
  title: string
  slug: string
  img: string
  date: string
  tag: string
}) {
  return (
    <>
      <Head>
        <title>{'Lucas Laurentino - ' + title}</title>
      </Head>
      {/* <div
        style={{backgroundImage: img ? `url("${img}")` : undefined}}
        className={`box-border  relative overflow-hidden   backdrop-opaci bg-no-repeat bg-center bg-fixed bg-cover h-[calc(100vh-4rem)] opacity-20`}
      /> */}
      <div className='max-w-7xl mx-auto shadow-inner mt-10 xl:mt-24'>
        <figure>
          <Image
            src={img}
            width={1000}
            height={1000}
            quality={100}
            alt=''
            className='aspect-[3/1.5] rounded-lg object-cover xl:w-2/3 mx-auto'
          />
          <figcaption className='text-center w-full mt-6 text-sm font-medium text-slate-500'>
            123
          </figcaption>
        </figure>
        <div className='flex items-center mt-10 xl:mt-24 space-x-20 justify-start'>
          <h1 className='font-neuzeit    text-5xl text-white'>{title}</h1>
          <Badge tag={tag} />
        </div>
        <span className=''>
          {new Date(date).toLocaleString('en-US', {dateStyle: 'full'})}
        </span>
        <p className='mt-5 xl:mt-10 mx-auto text-slate-300'>{summary}</p>
      </div>
      <main
        id='content'
        className='max-w-7xl mx-auto mt-20 min-h-[150vh] '
        dangerouslySetInnerHTML={{__html: content}}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  try {
    // @ts-ignore
    const post = getPostBySlug(params.slug, [
      'title',
      'content',
      'slug',
      'img',
      'summary',
      'date',
      'tag',
    ])
    const result = await convertMarkdownToHtml(post.content)
    return {
      props: {
        ...post,
        content: result,
      },
    }
  } catch (err) {
    return {
      props: {
        error: err,
      },
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts(['slug'])
  return {
    paths: paths.map(file => ({params: {slug: file.slug}})),
    fallback: true,
  }
}
