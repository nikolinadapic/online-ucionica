import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import MyLayout from '../components/my-layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

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
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h3>{edge.node.frontmatter.title}</h3>
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