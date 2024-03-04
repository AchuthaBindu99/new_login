const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    email: {
        required:true,
        type:String
    },
    password: {
        required:true,
        type:Number
    }
})

module.exports = mongoose.model("Student", studentSchema)