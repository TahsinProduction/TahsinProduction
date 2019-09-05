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
      <SEO title="Home" keywords={[`TahsinProduction`, `application`, `react`]} />
      <img src = "https://lh3.googleusercontent.com/66fkMhM37jZ2C1I9HZbIpn_Oebmx_HytEbvFd4HSKjpULIzO5hzh8w2dRBaibstgIIlUYDkeh8g5KAT1-mFV8tPuZu1cT3aiF1ZeaiB67xlbvh7TtlhdkkhnXRtmfAJEUmpsKR7Q" width="100%" height="auto" margin="0 auto" alt="embed" /><br></br><h1>New Articles</h1>
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