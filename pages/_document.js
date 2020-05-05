import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render () {
    return (
      <Html lang="es">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="author" content="Adrián Mora"/>
          <meta name="copyright" content="Adrián Mora"/>
          <link rel="shortcut icon" href=""/>
          <script async src=""/>
          <script dangerouslySetInnerHTML={
            {
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-user-2');`
            }
          }/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
export default MyDocument