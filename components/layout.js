import Head from 'next/head'
import Footer from './footer'
import Navbar from './navbar'
const Layout = (props) => {
    return (
        <>
            <Head>
               <title>{props.title}</title>
            </Head>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}
export default Layout