import {ArticlesCard} from '@/components/ArticleCards'

export default function Articles() {
  return (
    <>
      <main className='max-w-7xl mx-auto pb-20 mt-20'>
        <h1 className='mb-4  md:mt-20  font-neuzeit  text-xl'>Most recent</h1>
        <ArticlesCard />

        <div className='bg-gradient-to-r from-primary  to-purple-500 w-fit bg-clip-text'>
          <h1 className='mt-10  md:mt-20 font-neuzeit text-transparent text-3xl'>
            React/NextJS
          </h1>
        </div>
        <div className='grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-4  mt-8'>
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
        <div className='bg-gradient-to-r from-yellow-500  to-cyan-500 w-fit bg-clip-text'>
          <h1 className='mt-10  md:mt-20 font-neuzeit text-transparent text-3xl'>
            Golang
          </h1>
        </div>
        <div className='grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-4  mt-8'>
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
        <div className='bg-gradient-to-r from-green-500  to-blue-500 w-fit bg-clip-text'>
          <h1 className='mt-10  md:mt-20 font-neuzeit text-transparent text-3xl'>
            NodeJS
          </h1>
        </div>
        <div className='grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-4  mt-8'>
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
      </main>
    </>
  )
}
