import type { NextPage } from 'next';
import Head from 'next/head';
import Landing from '../components/Landing';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OCTO - Architecture Council</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <main>
        <Landing />
      </main>
    </>
  );
};

export default Home;
