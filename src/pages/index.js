import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

const IndexPage = () => {
  const postsPerPage = 2
  let numberOfPages
  return (
    <Layout pageTitle="TahsinProduction">
      <SEO title="Home" keywords={[`TahsinProduction`, `Tahsin Prodcution`, `TahsinProduction Home`]} />
      <img src = "https://s42myt.storage.yandex.net/rdisk/8ba4931eef98ed00b31c909f328af8ba9c9686e91a82f4552e883091fb411e7a/5dc46316/fKqInKw3d7bLFOeFnMGnhKXFCv-zr-VQXbCeoVHXJrhsxuCtBS8B2nbplSzrvTs8dSUP44fB1dXM3txotWMvfLxRpUhiGHgvxk-agTsA9J-r8npumZHI4midPdWhecNq?uid=954842455&filename=Official%20Cover%20TahsinProduction.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=954842455&fsize=16121709&hid=d63684c22b8ba84e5ae5e5992155e6dd&media_type=image&tknv=v2&etag=e3753f2a7e307d3aabc915a4f3afca57&rtoken=DwfeicGmVHyD&force_default=yes&ycrid=na-8935e87da1fe49e489e92728dac193ae-downloader3e&ts=596c5e0ee7180&s=bd0badce2ba571ef117d684ca36869f04186f5a94ab43a35304d44768992ac0b&pb=U2FsdGVkX18gHTCr4D9aw7zQrA4Ve_Q_8UVLQ2jkLzBATd2LYSKzglpIPTvSp8NTkXo_Hi8FZD9AkSUp6JZ1ze2NVEIfd2b07D5qxe-NbNQOwmGvy2uHpkv4cCvxmFkR" width="100%" height="auto" margin="0 auto" alt="TahsinProduction Tahsin Production" /><br></br><div className="mywhite"><h1>New Articles</h1></div>
      <StaticQuery
        query={indexQuery}
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  author={node.frontmatter.author}
                  body={node.excerpt}
                  date={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                />
              ))}
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage