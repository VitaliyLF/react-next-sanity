import localFont from 'next/font/local'
import Footer from '@/components/footer/Footer'
// import Navbar from '@/components/navbar/NavBar'
import './globals.scss'

export const AgrandirFont = localFont({
  src: [
    {
      path: './fonts/AgrandirRegular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-family-base',
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="page">
      <body className={`page__body ${AgrandirFont.className}`}>
        <a className="skiplink" href="#main">
          Skip to content
        </a>
        <div className="site-container">
          {/* <Navbar /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
