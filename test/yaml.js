var app = require('../app');

describe('Parse test', function () {
  it('should return an object', function (done) {
    app.getdata('./test.yml')
    done();
  })
})
