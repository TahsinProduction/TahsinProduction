import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="mypurple">
          <strong>Advertisement</strong>
        </CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="mypurple">
          <strong>Advertisement</strong>
        </CardTitle>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="mypurple">
          <strong>Recent Posts</strong>
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <strong><Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link></strong>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
