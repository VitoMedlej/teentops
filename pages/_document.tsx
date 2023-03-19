import {Html, Head, Main, NextScript} from 'next/document'
import Footer from '../src/Components/Footer/Footer'
// import SideBar from '../src/Components/Drawer/SideBar'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600;700&display=swap"
                    rel="stylesheet"/>
        <link rel="icon" href="https://ucarecdn.com/efe1f0cd-cded-4213-a0b2-6daed82bd506/001.png" />


        

            </Head>
            <body >
                <Main/>
                    <NextScript/>
                <Footer/>
            </body>
        </Html>
    )
}
