import type { NextPage } from 'next';
import Head from 'next/head';
import { SolanaSwapView } from 'views';
import TokenReserve from 'views/SolanaSwapView/TokenReserve';

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title> Swapper!</title>
        <meta name="description" content="A demo site for Remi" />
      </Head>
      <SolanaSwapView />
      {/* <TokenReserve /> */}
    </div>
  );
};

export default Home;
