var YAML = require('yamljs');
var fs = require('fs');

module.exports = {
  getdata: function getdata(dir) {
    // body...
    return YAML.parse(fs.readFileSync(dir,'utf8'))
  }
}
