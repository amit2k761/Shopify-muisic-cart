const express = require('express');
const shopcontroller = require('./controller/shopcontroller');
const app = express();

app.set('view engine','ejs');
app.use(express.static('./public'));

shopcontroller(app);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
});
