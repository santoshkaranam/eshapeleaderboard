import * as React from 'react'
import Layout from '../components/Layout'
import {NextPage} from 'next'
import LeaderBoard from "../components/Table";

const IndexPage: NextPage = () => {
    return (
        <Layout title="CropObserve Leader Board">
            <div  >
                <LeaderBoard/>
            </div>
        </Layout>
    )
}

export default IndexPage
