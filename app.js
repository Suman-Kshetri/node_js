const express=require("express")//include express package in our file
const app=express();//call the express function//app ma  object aayera baseko hunxag

app.set("vew engine","ejs")
app.get("/",(req,res)=>{
        res.send ("<h1>haha this is home page</h1>")
})
// app.get("/about",(req,res)=>{
//     res.send(`<h1>hello this is about page</h1>`)
// })
app.get("/about",(req,res)=>{
    const name="suman kshetri";
    res.render("about.ejs",{name});

})
app.get("/contact",(req,res)=>
{
    const name=""
    const email="ksuman20601028@gmail.com"
    res.render("about.ejs",{name,email});
})


app.listen(3000,()=>{//3000 vhaneko kun port number chalaune vhaneko[in terminal]
    console.log(`Nodejs project has started ${3000}`)
})
