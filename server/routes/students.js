
const Router = require("express")
const Student = require("../module/student")
const router = Router()


    router.post("/add" , async (req,resp) => {

        console.log(req.body)
        try{
            const data = await Student.create(req.body)

            if(data){
                resp.status(200).json({message:"success"})
            }
            
        }catch(e){
            resp.status(500).json({message: "failed"})
        }    
        
    })
    
    


module.exports = router


