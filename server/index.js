const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const  student = require("./routes/students")
const mongoose = require("mongoose")

const app = express()

app.use(bodyparser.json())
app.use(cors())

await mongoose.connect('mongodb://localhost/students') 

app.use("/students", student)
const port = 8080;

app.listen(port , () => {
    console.log(`App is listening on ${port}`)
})