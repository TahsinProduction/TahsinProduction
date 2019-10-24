import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

export function onRenderBody(
  { setHeadComponents }) {
setHeadComponents([
     <script
     dangerouslySetInnerHTML={{
        __html=`
      	"@context": "http://schema.org",
	      "@type": "Organization",
	      "name": "TahsinProduction",
	      "description": "New generation of content production. Information, news, blog and anything that can full fill the hunger of knowledge in human brain.",
	      "image": "https://i.postimg.cc/pdJ5HwKm/Website.jpg",
	      "logo": "https://i.postimg.cc/kMp6qFRv/Square.png",
	      "url": "https://www.tahsinproduction.com",
	      "sameAs": ["https://twitter.com/TahsinProduct","https://www.facebook.com/TahsinProduction-113057803405042/","https://www.youtube.com/channel/UCxxfd-YnLIxnGq1gVEraXig","https://www.reddit.com/user/TahsinProduction"]
   	    `
        }}
        />,
        ]);
        }

const IndexPage = () => {
  const postsPerPage = 2
  let numberOfPages
  return (
    <Layout pageTitle="TahsinProduction">
      <SEO title="Home" keywords={[`TahsinProduction`, `Tahsin Prodcution`, `TahsinProduction Home`]} />
      <img src = "https://i.postimg.cc/1XmHYPh9/Official-Cover-Tahsin-Production.jpg" width="100%" height="auto" margin="0 auto" alt="TahsinProduction Tahsin Production" /><br></br><div className="mywhite"><h1>New Articles</h1></div>
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