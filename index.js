const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require("./api/routes");
const app = express();




app.use( bodyParser.json() );
app.use(cors());

app.use("/api", routes);



mongoose.connect( process.env.DB_CONNECT,{ useNewUrlParser: true });



app.listen(8080, function() {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});