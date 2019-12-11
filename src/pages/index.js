import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

const IndexPage = () => {
  const { siteUrl } = useSEO();
  const postsPerPage = 2
  let numberOfPages
  return (
    <Layout pageTitle="TahsinProduction">
      <SEO title="Home" keywords={[`TahsinProduction`, `Tahsin Prodcution`, `TahsinProduction Home`]} />
      <img src = "https://images2.imgbox.com/bb/97/iMDQ3WE2_o.jpg" width="100%" height="auto" margin="0 auto" alt="TahsinProduction Tahsin Production" /><br></br><div className="mywhite"><h1>New Articles</h1></div>
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
