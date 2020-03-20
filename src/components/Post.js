import React from 'react'
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { Link } from 'gatsby'
import { slugify } from '../util/utilityFunctions'

const Post = ({ title, author, slug, date, body, tags }) => (
  <Card>
    <CardBody>
      <CardTitle>
        <strong><Link to={slug}>{title}</Link></strong>
      </CardTitle>
      <strong><CardSubtitle>
        <span className="text-primary">{date}</span> by{' '}
        <span className="text-primary">{author}</span>
      </CardSubtitle></strong>
      <strong><CardText>{body}</CardText></strong>
      <ul className="post-tags">
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}>
              <Badge color="primary" className="text-uppercase">
                {tag}
              </Badge>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={slug}
        className="btn btn-outline-primary float-right text-uppercase"
      >
        Read more
      </Link>
    </CardBody>
  </Card>
)

export default Post
