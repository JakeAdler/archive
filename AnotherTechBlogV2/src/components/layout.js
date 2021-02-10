import React, { Component } from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'
import { rhythm, scale } from "../utils/typography"
import P from 'react-particles-js'
import Bio from "./bio";



export default class Layout extends Component {


    render(){
        const { title, children } = this.props

        return(
            <LayoutContainer>
                <Particles params={config}/>
                <ContentContainer>
                <Header>
                    <BigTitle style={{
                        ...scale(1.5)
                    }}>
                        <StyledLink to='/'>
                            {title}
                        </StyledLink>
                    </BigTitle>
                    <Subtitle>
                        By <a href="https://www.google.com">Jake Adler</a>
                    </Subtitle>
                    <Bio/>
                </Header>
                <main>{children}</main>
                </ContentContainer>
            </LayoutContainer>
        )
    }
}




const LayoutContainer = styled.div`
    background: #0F2027;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
    padding-top: 25px;
    
`
const Particles = styled(P)`
    position: absolute;
    width: calc(100vw - 30px);
    height: calc(100vh - 30px);
    z-index: 0;
`
const ContentContainer = styled.div`
    position: relative;
    width: 50vw;
    margin: 0 auto;
    ${media.lessThan("large")`
        width: 80vw;    
    `}
    ${media.lessThan("medium")`
        width: 90vw;    
    `}
`
const Header = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    background-color: #00000070;
    padding-left: 25px;
`
const Subtitle = styled.h3`
    margin: 0%;
    margin-bottom: ${rhythm(1)};
    color: #FFFFFF;
`
const StyledLink = styled(Link)`
    box-shadow: none;
    text-decoration:  none;
    color: none;
    ${media.lessThan('medium')`
        font-size: 2rem;
    `}
`
const BigTitle = styled.h1`
    margin-top: 0;
`
const GlobalStyles = createGlobalStyle`
    html {
        overflow: hidden;
    }
`
const config = {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 2
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

