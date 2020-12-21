const path  = require("path")
const express = require('express');
const app = express()

const router = require("./router")

const port = process.env.PORT || 3000


// express middelware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))
// views are the files you render
app.set('views', __dirname + '/../views');
app.set("view engine", "hbs")
// end express middleware

app.use("/", router)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})