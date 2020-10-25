const express = require("express")
const path = require("path");
const dotenv = require('dotenv');

const app = express()

/*  Load the envionment variables */
dotenv.config({ path: "./config/config.env", debug: true });
const PORT = process.env.PORT || 3000;

const errorController = require("./controllers/errorController")

/* Setting up the public directory for serving the static files */
app.use(express.static(`${__dirname}/public`))

/* https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c */
/* Setting up the in-built express parser */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res, next) => {
  res.send("Working.. Sample route. can be deleted")
})

app.use(errorController.handle404)

app.listen(PORT, () => console.log("Server Started at port " + PORT))
