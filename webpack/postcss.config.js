module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ }),
    require('stylelint')({ /* ...options */ }),
    require('doiuse')({ /* ...options */ }),
    require('colorguard')({ /* ...options */ }),
    require('postcss-unique-selectors')({ /* ...options */ })
  ]
}