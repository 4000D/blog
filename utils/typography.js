import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import lincolnTheme from 'typography-theme-lincoln'

console.log(lincolnTheme);

// const typography = new Typography(Object.assign({}, lincolnTheme, options))
const typography = new Typography(lincolnTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
