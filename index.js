const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const key = process.env.API_KEY;

app.use(cors());
app.use(bodyParser.json());

const route = require("./route");

app.use("/", route);

app.listen(4000);
