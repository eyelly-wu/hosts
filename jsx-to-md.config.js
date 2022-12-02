const path = require('path')
const join = path.join

module.exports = {
  source: [
    {
      entry: join(__dirname, 'docs/index'),
      output: join(__dirname, 'README.md'),
      params: {
      },
    },
  ],
}
