// import App from 'next/app'
import '../styles/main.scss'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <meta name="apple-mobile-web-app-status-bar-style" content="#2A2766"/>
            <meta name="msapplication-navbutton-color" content="#2A2766"/>
            <meta name="theme-color" content="#2A2766"/>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp