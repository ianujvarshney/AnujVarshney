// next head
import Head from 'next/head';

// site details
import { site, socials } from '../lib/site';

const Seo = ({ title, description = site.description, path = '/', jsonLd = false }) => {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  const url = `${site.url}${path}`;
  const image = `${site.url}${site.ogImage}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${site.name}, Full Stack Developer`} />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* structured data (home page only) */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: site.name,
              url: site.url,
              image: image,
              jobTitle: 'Full Stack Developer',
              sameAs: socials.filter((s) => s.name !== 'Discord').map((s) => s.href),
            }),
          }}
        />
      )}
    </Head>
  );
};

export default Seo;
