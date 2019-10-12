import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default () => {
  // const md = { allMarkdownRemark: { nodes: [] } } // testing stub
  const md = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date }) {
          nodes {
            html
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    `
  )
  // const data = { site: { siteMetadata: { title: "hi" } } } // testing stub
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div style={{ color: `purple` }}>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>What a world!</p>
      <Link to="/about">About</Link>
      {/* <img
      src="https://source.unsplash.com/random/400x200"
      alt="unsplash random"
    /> */}
      {md.allMarkdownRemark.nodes.map((d, idx) => (
        <Link key={idx} to={d.fields.slug}>
          <div>{d.frontmatter.title}</div>
        </Link>
      ))}
    </div>
  )
}
