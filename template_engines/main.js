let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let navname="manoj.com";
  let searchnow="searchnow"
  let arr=["signup","login"];
  res.render('index',{navname:navname,searchnow:searchnow,arr:arr});
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));