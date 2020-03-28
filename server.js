const express = require('express')
const path = require('path');

const app = express()
const router = express.Router();
const port = 3000;


const appTestCounter = 1;

router.get('/',function(req,res){
  //console.log(path.join(__dirname+'/azure-client-demo/build/index.html'));
  //return res.send('Hello World!');
  res.sendFile(path.join(__dirname+'/azure-client-demo/build/index.html'));
  //res.sendFile(path.join(__dirname+'/azure-client-demo/build/index.html'));
  //__dirname : It will resolve to your project folder.
});




//add the router
app.use('/', router);

app.use(
  express.static('azure-client-demo/build')
);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
