import '../styles/globals.css';

// next head
import Head from 'next/head';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition'

//router
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <MotionConfig reducedMotion="user">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {/* initial={false}: the first page shows at once (no curtain on load), later route changes animate */}
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </MotionConfig>
  )
}

export default MyApp;
