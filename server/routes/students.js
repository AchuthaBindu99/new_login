const express = require ("express")

const mongoose = require("mongoose")
const router = express.Router()
const Student = require("../module/student")


async function main() {

    await mongoose.connect('mongodb://localhost/students') 

    router.post("/add" , async (req,resp) => {
        // console.log(req.body)
        // resp.json({status:"success" , message:"Data received"})
        // let newStudent = new Student({
        //     email:req.body.email,
        //     password:req.body.password
        // })
        try{
            const data = await Student.create(req.body)
            resp.status(200).json({message:"success"})
        }catch(e){
            resp.status(500).json({message: "failed"})
        }    
        
    })
    
    module.exports = router
}
// , (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("connected")
//     }
// })







// router.get("/all" , (req, resp) => {
//     resp.status(200).json({status:"Get api"})
// })

// router.post("/all" , (req, resp) => {
//     console.log(req.body)
//     resp.status(400).json({status:"post api"})
// })




// router.post("/add" , async (req,resp) => {
//     // console.log(req.body)
//     // resp.json({status:"success" , message:"Data received"})
//     // let newStudent = new Student({
//     //     email:req.body.email,
//     //     password:req.body.password
//     // })
    
// })
