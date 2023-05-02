import Link from 'next/link'

export function Badge({tag}: {tag: string}) {
  return (
    <Link
      href={`/articles#${tag}`}
      className={`${
        tag === 'reactjs'
          ? 'bg-gradient-to-br from-primary to-primary/60'
          : tag === 'nodejs'
          ? 'bg-gradient-to-br from-green-500 to-green-800 '
          : tag === 'nextjs'
          ? 'bg-gradient-to-br from-purple-500  to-purple-800'
          : 'bg-gradient-to-br from-cyan-500  to-cyan-800'
      } hover:brightness-110 transition text-white font-semibold px-4 py-2 rounded-full`}>
      {tag}
    </Link>
  )
}
