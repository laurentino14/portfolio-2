import {readFileSync, readdirSync} from 'fs'
import matter from 'gray-matter'
import {join} from 'path'
import {remark} from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

const postDirectory = join(`${process.cwd()}/src/articles`)
export async function convertMarkdownToHtml(md: any) {
  const result = await remark()
    .use(html, {sanitize: false})
    .use(prism)
    .process(md)
  return result.toString()
}

export function getPostBySlug(slug: string, fields: string[]) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postDirectory, `${realSlug}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')
  const {data, content} = matter(fileContents)
  const object: {[key: string]: any} = {}

  fields.forEach(field => {
    if (field === 'slug') {
      object[field] = realSlug
    }

    if (field === 'content') {
      object[field] = content
    }

    if (data[field]) {
      object[field] = data[field]
    }
  })
  return object
}

export function getAllPosts(fieldsSearch: string[]) {
  const slugs = getAllPostsSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fieldsSearch))
    .sort(
      (post1, post2) =>
        new Date(post2.date).getTime() - new Date(post1.date).getTime(),
    )
    .map(post => {
      return {...post, slug: post.slug}
    })

  return posts
}

export function getAllPostsSlugs() {
  return readdirSync(postDirectory)
}