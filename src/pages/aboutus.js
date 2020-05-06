import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
const AboutPage = () => (
  <Layout pageTitle="About Us">
    <SEO title="About Us" keywords={[`TahsinProduction`, `Tahsin Production`, `About Us`]} />
    <div className="col-md-3"></div>
    <img src = "https://images2.imgbox.com/bb/97/iMDQ3WE2_o.jpg" width="100%" height="auto" margin="auto" alt="TahsinProduction Tahsin Production" />
<p className="mytext">Welcome to TahsinProduction, your number one source for all authentic content. We're dedicated to giving you the very best of digital content, with a focus on autheticity, quality of content.</p>
<p className="mytext">Founded in 2016 by Tahsin, TahsinProduction has come a long way from its beginnings in Siberia,Russia. When Tahsin first started out, his passion for qualityful authentic content drove him to do tons of research, work for many days without sleep, remove all kind of hobbies and fun from life so that TahsinProduction can offer you "the world's most qualityful content". We now serve content all over the world and are thrilled that we're able to turn our passion into our own website. Once it was a dream of a 13year old boy and now it is our reality. The main goal is not to make our website valuable but to get the most value for your time.
We hope you enjoy our content as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us through our ContactUs page.</p>
<p className="mytext">Sincerely,</p>
<p className="mytext">TahsinProduction</p>
</Layout>)
export default AboutPage
