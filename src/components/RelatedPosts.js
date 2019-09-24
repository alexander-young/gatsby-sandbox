import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query RelatedPostsQuery {
        wordPress {
          posts(first: 3) {
            nodes {
              title
              uri
              excerpt
              featuredImage {
                sourceUrl(size: MEDIUM)
                srcSet(size: MEDIUM)
              }
            }
          }
        }
      }
    `}
    render={postsData => {
      console.log({ postsData })
      return (
        <div>
          <h2>Related Posts</h2>
          <div className="row mb-5">
            {
              postsData.wordPress.posts.nodes.map(node => {
                return (
                  <div className="col-sm" key={node.uri}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{node.title}</h5>
                        <div className="card-text" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        <Link className="btn btn-primary" to={node.uri}>Read More</Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }}
  />
)