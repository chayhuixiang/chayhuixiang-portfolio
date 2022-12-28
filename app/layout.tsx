import '../styles/globals.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';
import Providers from './Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
        <body className="font-primary text-gunmetal dark:text-white">
          <Providers>
          <Loader />
            <div id='portal' className='z-50' />
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
    </html>
  )
}
