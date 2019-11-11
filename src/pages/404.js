import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout pageTitle="Oups, Somethig went wrong..">
    <SEO title="404: Not found" />
    <img src = "https://images2.imgbox.com/bb/97/iMDQ3WE2_o.jpg" width="100%" height="auto" margin="0 auto" alt="TahsinProduction Tahsin Production" />
    <Link className="btn btn-primary text-uppercase" to={'/'}>
      Go home
    </Link>
  </Layout>
)

export default NotFoundPage
