import Typography from "typography"
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a" : {
      textShadow: 'none',
      backgroundImage: "none",
      color: "#5BC0EB"
    },
    "p": {
      marginTop: '15px'
    },
    "blockquote": {
      borderLeftColor: "#00000060"
    }
  }
}

delete fairyGatesTheme.googleFonts

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
