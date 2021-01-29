import React from 'react';
import Head from 'next/head';

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>Hello World</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
