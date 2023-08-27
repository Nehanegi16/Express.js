const express=require('express')
const app=express()
app.get('/',(req,res)=>{
  res.send("hello from home")
})
app.get("/about",(req,res)=>{
    res.send("hello from about")
})
app.listen(8000,()=>{
    console.log("listning from port 8000")
})

// get=Read 
// post=create
// put=Update 
// delete=delet
