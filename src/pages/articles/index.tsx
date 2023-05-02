import {ArticlesCard} from '@/components/ArticleCards'
import {getAllPosts} from '@/lib/article'
import {GetStaticProps} from 'next'
import Head from 'next/head'
export type Post = {
  title: string
  summary: string
  date: string
  slug: string
  img: string
  tag: string
  author: {name: string; job: string; img: string}
  coAuthors: [{name: string; job: string}]
}
export default function Articles({posts}: {posts: [Post]}) {
  const react = posts.filter(post => post.tag === 'react')
  const golang = posts.filter(post => post.tag === 'golang')
  const nodejs = posts.filter(post => post.tag === 'nodejs')
  return (
    <>
      <Head>
        <title>Lucas Laurentino - Articles</title>
      </Head>
      <main className='max-w-7xl mx-auto pb-20 mt-24'>
        {posts && <ArticlesCard isMostRecent post={posts[0]} />}

        <div
          id='react'
          className='mb-10 md:mb-20 bg-primary  w-fit bg-clip-text'>
          {/* <h1 className='mt-10  md:mt-20 font-neuzeit text-transparent text-3xl'>
            React/NextJS
          </h1> */}
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-0 md:gap-4  mt-8'>
          {posts.map((post, i) => {
            if (i !== 0) {
              return <ArticlesCard key={post.slug} post={post} />
            }
          })}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = getAllPosts([
      'title',
      'summary',
      'slug',
      'content',
      'date',
      'author',
      'coAuthors',
      'tag',
      'img',
    ])

    return {
      props: {
        posts,
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
