import {ArticlesCard} from '@/components/ArticleCards'
import {Divider} from '@/components/Divider'
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
      <main className='max-w-7xl mx-auto pb-24 mt-24'>
        {posts && <ArticlesCard post={posts[0]} />}
        <Divider />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-8 md:gap-4  mt-8'>
          {posts.map((post, i) => {
            if (i !== 0 && i < 7) {
              return <ArticlesCard key={post.slug} post={post} />
            }
          })}
        </div>
        <Divider />
        <div className='grid  items-center gap-y-10'>
          {posts.map((post, i) => {
            if (i !== 0 && i > 6) {
              return <ArticlesCard i={i} key={post.slug} post={post} />
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
