import Head from 'next/head';
import { Sidebar } from '../components';

export default function Home() {
  return (
    <>
    <Head>
      <title>Twitter clone</title>
      <meta name="description" content="This a twitter clone made in NextJs, Tailwind css and Firebase" />
      <meta rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex min-h-screen max-w-7xl mx-auto">
    {/* Sidebar */}
    <Sidebar />

    {/* Feed */}
    
    {/* Widgets */}

    {/* Modal */}

    </main>
    </>
  )
}
