const express = require("express");

const app = express();

app.listen(8000, () => {
    console.log("Server Started and listing");
});

app.get("/", function(request, response){
    response.send("Hello Node JS!!!");
});