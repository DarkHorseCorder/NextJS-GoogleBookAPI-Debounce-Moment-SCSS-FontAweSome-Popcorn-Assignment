import Head from 'next/head';

import Footer from './Footer';

const Layout = ( props ) => {
  return (
    <div className="PageWrapper">
      <Head>
        <title>Popcorn Google Book Library</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <main className="Main">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;