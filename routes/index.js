
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.payload = function(req, res){
  var http = require('http')
    , req = http.IncomingMessage.prototype;

  var _addHeaderLine = req._addHeaderLine;

  //Patch ServerRequest to save unmodified copy of headers
  req._addHeaderLine = function(field, value) {
    var list = this.complete ?
      (this.allTrailers || (this.allTrailers = [])) :
      (this.allHeaders || (this.allHeaders = []));
    list.push(field + ': ' + value);
    _addHeaderLine.call(this, field, value);
  };

  console.log("fooooo");
  console.log(req);
  console.log(res);
  console.log("raw headers");
  console.log(req._allHeaders.join('\r\n'));
  res.render('index', { title: 'payload' });
};
