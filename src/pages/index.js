import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my new portfolio site. My name is Lan Barrick and I am a caring person. Check out my awesome portfolio created by the most incredible man I know, my husband, Dan Barrick.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <img className="responsive" alt="Taylor Swift" src="https://res.cloudinary.com/https-www-dreamardor-com/image/upload/v1540609589/taylor-swift-sexy.jpg"></img>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
