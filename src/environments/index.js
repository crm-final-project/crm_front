
const dotenv = require("dotenv")

dotenv.config({ path: './development.env' })

const environments = () => {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: './development.env' })
  }
}
module.exports = environments