import Head from 'next/head';

import Footer from './Footer';

const Layout = ( props ) => {
  const searchFocus = props.focusSearch ? '' : 'SearchFocus'
  const hiddenListBar = props.showBookListBar ? '' : 'hiddenListBar';
  return (
    <div className={`PageWrapper ${searchFocus} ${hiddenListBar}`}>
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