 const express = require('express')
 const cors = require("cors");
 const bookRouter = require('./router/Book.router')
 const app = express() 

 const corsOptions = {
    origin: "http://localhost:8081"
  };
    app.use(cors(corsOptions));

    //parse request of content-type - application/json
    app.use(express.json())
    //parse request of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({extended: true}))
    app.use('/',bookRouter);

const server = app.listen(process.env.PORT || 8080, function(){
    console.log('Listening on port ' + server.address().port);
});
