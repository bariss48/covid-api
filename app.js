//initiliaze variables and npm packages
const express = require('express');
const https = require('https');
const dataset_route = require('./utils/getdata');
const main_view = require('./routes/main');
// use express
const app = express();
app.set("view engine","ejs");
app.use(express.static('public'));

app.use("/",main_view);
app.use("/",dataset_route);

app.listen(3000,() => {
    console.log("app active on port 3000");
} )