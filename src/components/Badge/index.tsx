import Link from 'next/link'

export function Badge({tag}: {tag: string}) {
  return (
    <Link
      href={`/articles#${tag}`}
      className={`${
        tag.match('react')
          ? 'bg-primary'
          : tag.match('nodejs')
          ? 'bg-green-500 '
          : ''
      } hover:brightness-110 transition text-white font-semibold px-4 py-1 rounded-full`}>
      {tag}
    </Link>
  )
}
