const path = require("path");
const parser = require("body-parser");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Listening on port #"+PORT);
});