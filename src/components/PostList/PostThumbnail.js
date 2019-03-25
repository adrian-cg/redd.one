import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Box, Composition } from 'atomic-layout'

import Text from '../Text'

const postTemplate = `
  thumbnail
  content
`

const ThumbnailMask = styled.div`
  overflow: hidden;
  width: 100%;
`

const PostLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`

const PostTitle = styled.h2`
  margin: 0;
`

const PostThumbnail = props => {
  const { post } = props

  return (
    <Composition
      template={postTemplate}
      templateRows="250px 1fr"
      gutter={16}
      gutterMd={24}
      height="100%"
      maxWidthSmDown={400}
    >
      {({ Thumbnail, Content }) => (
        <>
          <ThumbnailMask height={200}>
            <PostLink to={post.fields.url}>
              <Image
                fluid={post.frontmatter.image.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </PostLink>
          </ThumbnailMask>
          <Content>
            <Box marginBottom={10}>
              <Text primary small>
                {post.frontmatter.category}
              </Text>
              <Text small muted>
                {' '}
                · {post.frontmatter.date}
              </Text>
            </Box>

            <PostLink to={post.fields.url}>
              <PostTitle>{post.frontmatter.title}</PostTitle>
            </PostLink>

            <Box marginTop={16}>
              <Text small>
                {post.frontmatter.description || (
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                )}
              </Text>
            </Box>
          </Content>
        </>
      )}
    </Composition>
  )
}

export default PostThumbnail
