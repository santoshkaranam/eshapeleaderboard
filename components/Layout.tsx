import * as React from 'react'
import {useEffect, useState} from 'react'
import Head from 'next/head'

type Props = {
    title?: string
}


const Layout: React.FunctionComponent<Props> = ({
                                                    children,
                                                    title = 'CropObserve Leader Board',
                                                }) => {

    const [i, setI] = useState(-1);

    useEffect(() => {
        const i = Math.floor(Math.random() * 10);
        console.log(i);
        setI(i);
    }, [])
    
    if (i < 0) {
        return (<div>Loading...</div>)
    }

    return (<div style={{backgroundImage: "url('crop" + i + ".jpg')", backgroundSize: "cover"}}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        {children}
        <footer className="text-center pb-2 text-yellow-200">
            © Copyright 2022 IIASA
        </footer>
    </div>);
}

export default Layout
