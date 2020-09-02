import React from 'react'
import { graphql } from 'gatsby'

import MyLayout from '../components/my-layout'

export const query = graphql`
query (
	$slug: String!  
)
{
    markdownRemark (
        fields: {
            slug: {
                eq: $slug
            }
        }
    )
    {
        frontmatter {
            title
            date
        }
        html
    }
}
`

const Blog = (props) => {
    return (
        <MyLayout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </MyLayout>
    )
}

export default Blog