import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2024-05-03',
  dataset: 'production',
  projectId: '0ueag3f5',
  useCdn: false,
  token:
    'skLh4WGrfViAh1MgPUzwTAU3dBnHY8LIAx9sgxsu5O4ukqOJ0WOeIMKvwgXKaEU0sQvGK3wy8z7iom6RIxlpZlqDriRx9SQW4OwJ91PBm8kvXnKy4wWBcMCxxcH3f1GgodDgl6sVvIeEuhq3vF5Z4bzXlr7nQ4Wk8QBYirUMkwFjDjavNE6c',
  ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
