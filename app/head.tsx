export default function Head() {

  const seo = {
    title: 'Chay Hui Xiang',
    description: 'Chay Hui Xiang is a Year 2 Renaissance Engineering Programme Scholar specialising in the field of Computer Science.',
    image: 'https://chayhuixiang.com/images/about/avatar.png',
    url: 'https://chayhuixiang.com',
  }

  const twitterUsername = '@Sqweedy__'


  return (
    <>
      <title>Chay Hui Xiang</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <link rel='manifest' href='/site.webmanifest' />

      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name='description' content='Chay Hui Xiang is a Year 2 Renaissance Engineering Programme Scholar specialising in the field of Computer Science.' />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      
      <meta property="" />
      <meta property="keywords" content="Full-stack Developer, Software Developer, Crystal Cheong"></meta>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="google-site-verification" content="1CD3YHKSKi-hiS1TlKgf1jHN8wfPDWN9q5J1pvTXs90" />
    </>
  )
}
