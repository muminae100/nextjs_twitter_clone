import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Head>
      <title>Twitter clone</title>
      <meta name="description" content="This a twitter clone made in NextJs, Tailwind css and Firebase" />
      <meta rel="icon" href="/favicon.ico" />
    </Head>

    <h1 className="text-3xl font-bold underline bg-slate-300 p-2">
      Hello world!
    </h1>
    </>
  )
}
