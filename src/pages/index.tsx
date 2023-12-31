import Projects from '@/sections/Projects'
import Intro from '@/sections/Intro'
import Head from 'next/head'
import Contact from '@/sections/Contact'

export default function Home() {
    return (
        <>
            <Head>
                <title>Chindy's Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/iconn.webp" />
                <meta name="google-site-verification" content="xlPoi88KICpt8hQNAVh2sxeUyIe-mEn52GNkjnCSvLA" />
            </Head>
            <main>
                <a href="#contact_me" className='contactBtnFixed'>contact me.</a>
                <Intro />
                <Projects />
                <Contact/>
            </main>
        </>
    )
}
