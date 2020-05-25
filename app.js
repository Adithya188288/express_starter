const express = require("express")
const path = require("path")

const app = express()

const PORT = require("./config").PORT
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
