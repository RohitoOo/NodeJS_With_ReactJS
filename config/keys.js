if (process.env.NODE_EnV === 'production' ){
module.exports = require ('./prod');
  // in prod sec
}else {
// in dev. session
  module.exports = require ('./dev');
}
