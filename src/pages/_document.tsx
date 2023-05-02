import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          href='https://unpkg.com/prismjs@1.28.0/plugins/line-numbers/prism-line-numbers.min.css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
