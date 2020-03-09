const express = require('express')
const path = require('path');

const app = express()
const router = express.Router();
const port = 3000

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
