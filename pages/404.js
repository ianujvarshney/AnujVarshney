// next link
import Link from 'next/link';

// next head
import Head from 'next/head';

const NotFound = () => {
  return (
    <div className='page-section text-center'>
      <Head>
        <title>Page not found | Anuj Varshney</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className='container mx-auto flex flex-col items-center'>
        <p className='text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4'>Error 404</p>
        <h1 className='h2'>This page doesn&apos;t exist<span className='text-accent'>.</span></h1>
        <p className='max-w-[420px] mb-10'>
          The link may be broken or the page may have moved. Try one of these instead.
        </p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='/' className='btn-primary'>Back to home</Link>
          <Link href='/work' className='btn-outline'>See my work</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
