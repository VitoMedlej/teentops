import {Html, Head, Main, NextScript} from 'next/document'
import Footer from '../src/Components/Footer/Footer'
// import SideBar from '../src/Components/Drawer/SideBar'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;600;700&display=swap"
                    rel="stylesheet"/> */}
        <link rel="icon" href="https://ucarecdn.com/2d5f1822-0735-4ec9-9024-f68bad6e39db/269840025_452152916535842_4269873123222669231_n.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
        

            </Head>
            <body >
                <Main/>
                    <NextScript/>
                <Footer/>
            </body>
        </Html>
    )
}
