import { client } from './sanity'

export async function getDataHomePage() {
  const query = `
    *[_type == 'homepage'] [0] {
      title,
      description,
      'currentSlug': slug.current,
      titleImage
    }
  `

  const data = await client.fetch(query)

  return data
}
