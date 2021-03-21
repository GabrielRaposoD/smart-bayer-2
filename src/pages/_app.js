// Modules Import
import { DefaultSeo } from 'next-seo'

// Application Imports
import '@styles/tailwind.css'
import '@styles/index.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo
        titleTemplate={router.route === '/' ? '%s' : '%s | Smart Bayer'}
        description="Smart Bayer powered by Chiligum"
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: process.env.NEXT_PUBLIC_SITE_URL,
          site_name: 'Smart Bayer',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
