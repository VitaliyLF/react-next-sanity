import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="">
      <div className="">Not Found page</div>
      <p>sorry the page does not exist</p>
      <Link href="/">Returm Home</Link>
    </div>
  )
}

export default NotFound
