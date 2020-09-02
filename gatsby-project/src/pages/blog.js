import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import MyLayout from '../components/my-layout'
import headerStyles from '../components/header.module.scss'

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
                fields {
                    slug
                }
                }
            }
            }
        }
    `)

    //TODO stil linkova!
    return(
        <MyLayout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link className={headerStyles.navItem} to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </MyLayout>
    )
}

export default BlogPage