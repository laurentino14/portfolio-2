import {BigLogo} from '@/assets/big-logo'

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto min-h-[calc(100vh-4rem)] flex items-center justify-between'>
      <div className='flex flex-col justify-center items-start'>
        <h1 className='font-neuzeit mb-[0.125rem] text-4xl tracking-[-0.05rem] leading-[100%]'>
          Lucas Laurentino
        </h1>
        <h3 className='font-biotif mb-4 text-2xl tracking-[-0.03rem]  text-grayText/90'>
          Software Engineer
        </h3>
        <p className='leading-[120%] max-w-md'>
          Hi guys, welcome to my universe !
          <br />
          Here you will find all my articles, projects, ideas and contributions
          to the community.
          <br />
          Feel free if you want to get closer and know a little more about me.
        </p>
      </div>
      <div>
        <BigLogo />
      </div>
    </main>
  )
}
