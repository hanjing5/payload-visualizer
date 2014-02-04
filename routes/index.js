
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.payload = function(req, res){
  console.log("fooooo");
  console.log(req);
  console.log(res);
  res.render('index', { title: 'payload' });
};
