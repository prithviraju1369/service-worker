var index =require('./index');

var port=process.env.PORT||1369;
index.listen(port);               
console.log('App Started on port ' + port);