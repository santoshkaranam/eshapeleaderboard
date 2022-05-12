import * as React from 'react'
import Head from 'next/head'

type Props = {
    title?: string
}

const i = Math.floor(Math.random() * 10);

const Layout: React.FunctionComponent<Props> = ({
                                                    children,
                                                    title = 'CropObserve Leader Board',
                                                }) => (
    <div style={{backgroundImage: "url('crop" + i + ".jpg')", backgroundSize: "cover"}}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        {children}
        <footer className="text-center pb-2 text-yellow-200">
            © Copyright 2022 IIASA
        </footer>
    </div>
)

export default Layout
