require("dotenv").config();
const express = require("express");
const port = process.env.TYS_PORT || 3000;
const app = express();
const bodyParser = require("body-parser");

const moviesRouter = require("./api/routes/movies_route");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/movies', moviesRouter);

app.listen(port, () => { console.log('Running') });