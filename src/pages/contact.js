import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout pageTitle="Contact Us">
    <SEO title="ContactUS" keywords={[`TahsinProduction`, `Tahsin Production`, `Contact Us`]} />
    <div className="col-md-3"></div>
    <img src = "https://images2.imgbox.com/bb/97/iMDQ3WE2_o.jpg" width="100%" height="auto" margin="0 auto" alt="TahsinProduction Tahsin Production" />
<center><h1>If you have any query or problem or want to say something to us then please fill the form below</h1><h1>You will receive reply shortly</h1></center>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSce1xHd5ZL2qiJzL6MBL9cguPg-4-wamSDp2wSHQPE2ZnTWEQ/viewform?embedded=true" title="TahsinProduction" width="100%" height="1450" frameborder="0" marginheight="100%" marginwidth="100%">Loading…</iframe>
</Layout>)
export default AboutPage