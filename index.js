/*

 first question
const fs = require('fs');
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
      data=JSON.parse(data);
      let sum=0;
      for(let i=0;i<data.length;i++){
        sum+=data[i].age
      }
      console.log('yaslarin ededi ortasi:'+sum/data.length)
    } else {
      console.error(err);
    }
  });
  */


/*

second question
  const express = require('express');
  const app = express();
  
  app.get('/', function (req, res) {
    res.send('Rufet Ismayilov');
  });
  app.get('/card', function (req, res) {
    res.send('Bu route kartlar üçün cavabdehdir');
  });
  app.get('/client', function (req, res) {
    res.send('Bu marşrut müştərilər üçün cavabdehdir');
  });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  */
 
  // third question
  const fs = require('fs');
 const express = require('express');
 const app = express();


 workers=[
  { "id":1,"name": "Sam", "age": 45 },
  { "id":2,"name": "Tom", "age": 34 },
  { "id":3,"name": "Bill", "age": 18 }
]

 app.get('/Sam', function (req, res) {

      res.send('iscinin id si:'+workers[0].id+' ,iscinin adi :'+workers[0].name+' ,iscinin yasi :'+workers[0].age)
 
  });

  app.get('/Tom', function (req, res) {
 
    res.send('iscinin id si:'+workers[1].id+' ,iscinin adi :'+workers[1].name+' ,iscinin yasi :'+workers[1].age)
 
});

app.get('/Bill', function (req, res) {
 res.send('iscinin id si:'+workers[2].id +' ,iscinin adi :'+workers[2].name+' ,iscinin yasi :'+workers[2].age)

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});