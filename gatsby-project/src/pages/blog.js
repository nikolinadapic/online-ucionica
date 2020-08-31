import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import MyLayout from '../components/my-layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
            edges {
                node {
                frontmatter {
                    title
                    date
                }
                html
                excerpt
                }
            }
            }
        }
    `)

    return(
        <MyLayout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </MyLayout>
    )
}

export default BlogPage