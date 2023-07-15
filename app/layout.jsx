import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';
import Head from 'next/head';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts",
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ],
  },
  manifest: '/site.webmanifest'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'/>
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout