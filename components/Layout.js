import { Sora } from 'next/font/google'

// font settings (Sora is a variable font, so one file covers every weight)
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

//components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-center bg-no-repeat ${sora.variable} font-sora`}>
      <a href="#main" className="skip-link">Skip to content</a>
      <TopLeftImg />
      <Header />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
    </div>
  );
};

export default Layout;
