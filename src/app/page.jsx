import { getDataHomePage } from './lib/getData'
import { urlFor } from './lib/sanity'
import Image from 'next/image'

export const metadata = {
  title: 'Homepage',
  description: 'Homepage descr',
}

const HomePage = async () => {
  const data = await getDataHomePage()

  return (
    <main className="homepage" id="main">
      <div className="container">
        <h2 className="title">{data.title}</h2>
        <p>{data.description}</p>
        {data.titleImage && (
          <Image
            className="image"
            src={urlFor(data.titleImage).url()}
            alt="name"
            width={500}
            height={500}
            loading="lazy"
          />
        )}
      </div>
    </main>
  )
}

export default HomePage
