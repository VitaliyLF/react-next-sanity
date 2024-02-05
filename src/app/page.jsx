import { client, urlFor } from './lib/sanity'
import Image from 'next/image'

export const metadata = {
  title: 'Homepage',
  description: 'Homepage descr',
}

async function getData() {
  const query = `
  *[_type == 'homepage'] {
  title,
  description,
  'currentSlug': slug.current,
  titleImage
  }
  `

  const data = await client.fetch(query)

  return data
}

const HomePage = async () => {
  const data = await getData()

  return (
    <main className="homepage" id="main">
      <div className="container">
        <h2 className="title">Homepage</h2>
        <p>
          Homepage text Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ullam ad quisquam iure aliquid, distinctio reiciendis fugit quod
          asperiores. Quia tenetur provident laboriosam aliquam corrupti tempora
          doloremque esse culpa ipsam iste.
        </p>
        <Image
          src={urlFor(titleImage).url()}
          alt="image"
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
    </main>
  )
}

export default HomePage
