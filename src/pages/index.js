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
      <img src = "https://previews.dropbox.com/p/thumb/AAk3xuk1wop6V0ULzD7Pa3CLSjMFFyGBYZiu4XqUr0mWV_FSTFNcmGs9yHbvnFN7cov8BTqS0r8G3elwnOUq41xEYRBGlFsR9qUzpLiHP3XDGODK5Q9Wpf6xFJT-aPmv2E7nZEZolAA3aCqpAx7BkUWHxGaSG5hWFSX_hvoDghEaw6rQXmOdbYHGxZ1VC-7KsoRaq-aMpg2_pfeUGh16pLOY-aP0Hwt3vGeD-K50v3k9nkvfHBRygqC0raKveLi2qCL4Nn_1zD-5lceH1WXY4E8NaOzd0luG_EFoTxTc2GkmPuaX0VO4ZRZoWt0jZ56wx_-P0IKXErxV4MZ5du4XHwzrxDAOaMdlWhxznsDsEFwv1gjq0MjaSyR3jzMNCyCWIZOWM4K6ZCpYyc4CcLVDUVImwqWsc4WAzozMpQCqYYKgfPkCfvG_Jh9MEPDcKVeK7GHqEavNzSMNbnTzffpMHpNvEn3CUKnYS2AszYlbtQZVKIvdUvpRGJgvbV5CSmc98WtgoYiONORuwnnfvEo8d8RI/p.jpeg?size=1600x1200&size_mode=3" width="100%" height="auto" margin="0 auto" alt="TahsinProduction Tahsin Production" /><br></br><div className="mywhite"><h1>New Articles</h1></div>
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