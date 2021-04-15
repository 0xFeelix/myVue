const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html']
    })
  ]
}

postcss([
  purgecss({
    content: ['./src/**/*.html']
  })
])