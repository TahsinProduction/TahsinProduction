import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

const schemaOrgWebPage = {
  '@context': 'http://schema.org',
  '@type': 'WebPage',
  url: siteUrl,
  headline,
  inLanguage: siteLanguage,
  mainEntityOfPage: siteUrl,
  description: defaultDescription,
  name: defaultTitle,
  author: {
    '@type': 'Person',
    name: author,
  },
  copyrightHolder: {
    '@type': 'Person',
    name: author,
  },
  copyrightYear: '2019',
  creator: {
    '@type': 'Person',
    name: author,
  },
  publisher: {
    '@type': 'Person',
    name: author,
  },
  datePublished: '2019-01-18T10:30:00+01:00',
  dateModified: buildTime,
  image: {
    '@type': 'ImageObject',
    url: `${siteUrl}${defaultBanner}`,
  },
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