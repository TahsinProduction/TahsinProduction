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
      <img src = "https://s29vla.storage.yandex.net/rdisk/15e6b201fe6914c8f194073329683176f95d2bee0aad89811c0d5c1b7bf13aa6/5dc2ba6e/fKqInKw3d7bLFOeFnMGnhKXFCv-zr-VQXbCeoVHXJrhsxuCtBS8B2nbplSzrvTs8dSUP44fB1dXM3txotWMvfLxRpUhiGHgvxk-agTsA9J-r8npumZHI4midPdWhecNq?uid=1130000040914342&filename=Official%20Cover%20TahsinProduction.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000040914342&fsize=16121709&hid=d63684c22b8ba84e5ae5e5992155e6dd&media_type=image&tknv=v2&etag=e3753f2a7e307d3aabc915a4f3afca57&rtoken=hzz3sEMRXFGR&force_default=yes&ycrid=na-9b92214ca12be776947ff2bc68412c38-downloader10f&ts=596ac9130f780&s=77c15ece090fa1e3f32aecf2a688c733d0251aaf47d110fb02475ff40f8e4e81&pb=U2FsdGVkX1-dBXO6rHKu5HTbFRujvjYbMScply42GBDCT7po6VyfI7atMw5p_3zOqbMXOKuuqkiQqTq1-c1YzlBZpt5OTffwEfqcjAaEKirkPIdHj7swK51MqpH6v2kq" width="100%" height="auto" margin="0 auto" alt="TahsinProduction Tahsin Production" /><br></br><div className="mywhite"><h1>New Articles</h1></div>
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