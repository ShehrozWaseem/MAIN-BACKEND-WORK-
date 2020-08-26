const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  //eval(require('locus'));
  var parseData = JSON.parse(body);
  // we used JSON.parse to convert for data coming from api to make it a javascript object
  // because as the api data comes in string 'data'
  // like the so we cant access it so we use JSON.parse(body) so the this convert the body data type which is in string
  // and convert it into JSON i.i javascript object
  console.log(parseData);
  console.log(`${parseData.name}  lives in  ${parseData.address.city}`);
  
});
