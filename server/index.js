const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")

const mongoose = require("mongoose")
const router = require("./routes/students.js")

const app = express()
const port = 8080;


app.use(express.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

async function main(){

    await mongoose.connect('mongodb://localhost/students') 

    app.use("/", router)


    app.listen(port , () => {
        console.log(`App is listening on ${port}`)
    })
}

main().catch(e=>console.log(e))

