import localFont from 'next/font/local'
import Footer from '@/components/Footer/Footer'
import './globals.scss'
import Header from '@/components/Header/Header'

export const GilroyFont = localFont({
  src: [
    {
      path: './fonts/GilroyRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GilroyMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GilroySemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/GilroyBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-family-base',
})

export const TahomaFont = localFont({
  src: [
    {
      path: './fonts/Tahoma-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Tahoma-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-family-accent',
})

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`page ${GilroyFont.variable} ${TahomaFont.variable}`}
    >
      <body className="page__body">
        <a className="skiplink" href="#main">
          Skip to content
        </a>
        <div className="site-container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
