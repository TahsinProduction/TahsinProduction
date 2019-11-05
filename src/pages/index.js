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
      <img src = "https://s42myt.storage.yandex.net/rdisk/4bbca25dc7a7f946fd21418a4e0d2ac20ec87f6ec36929011d0019da43ae78ff/5dc1bc90/fKqInKw3d7bLFOeFnMGnhKXFCv-zr-VQXbCeoVHXJrhsxuCtBS8B2nbplSzrvTs8dSUP44fB1dXM3txotWMvfLxRpUhiGHgvxk-agTsA9J-r8npumZHI4midPdWhecNq?uid=1130000040914342&filename=Official%20Cover%20TahsinProduction.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000040914342&fsize=16121709&hid=d63684c22b8ba84e5ae5e5992155e6dd&media_type=image&tknv=v2&etag=e3753f2a7e307d3aabc915a4f3afca57&rtoken=fmPpBYVkYQIQ&force_default=yes&ycrid=na-3bccdd90c5740af1ff0c1785186a632c-downloader20e&ts=5969d6f7c4400&s=b0ac335148950ef70b2601245c9a4ed5bf8b3faf4506bfbe9e574f1651093314&pb=U2FsdGVkX1_sKIeSM_UMcAD8lTdrUNjHjgy-D3aQ47F_v33w_w020F3ecGaaU_ceQ_UZVMe0Tqc-P2schmJLnfbXBzDPbAssEZ_xgburHVZYeixJ8hb85WHT-Bpq8Udc" width="100%" height="auto" margin="0 auto" alt="TahsinProduction Tahsin Production" /><br></br><div className="mywhite"><h1>New Articles</h1></div>
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