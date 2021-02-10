
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const ProfilePicture = styled(Image)`
    margin-right: ${rhythm(1/2)};
    margin-bottom: 0;
    min-width: 50;
    border-radius: 100%;
    z-index: 2;
`

export default function Bio(){

  return(
    <StaticQuery 
    query={bioQuery}
    render={data =>{
      
      return(
          <a href='https://www.jakeadler.dev' target='_blank'>
              <ProfilePicture
              fixed={data.avatar.childImageSharp.fixed}
              alt='Picture of me'
              imgStyle={{
                  borderRadius: `50%`,
              }}
              />
          </a>
        )
    }}
    />
  )

}
const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`