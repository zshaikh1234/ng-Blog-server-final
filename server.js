const express = require("express");
const cors = require("cors");
const sql = require("./sql");


const app = express();

var corsOptions ={
    origin:["http://localhost:4200" ,"http://localhost:4200"]
}

app.use(cors(corsOptions));

app.listen(8000, () => {
    console.log("Server Started and listing");
    sql.init();
    
});

app.get("/", function(request, response){
    response.send("Hello Node JS!!!");
});

require("./article.js")(app, sql);
require("./dashboard.js")(app, sql);