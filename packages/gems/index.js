const gems = require('./gems.json')

function pick() {
  const index = Math.floor(Math.random() * gems.length)

  return gems[index]
}

gems.pick = pick

module.exports = gems
