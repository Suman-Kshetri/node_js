// creating box [table/home/room] to hold the inputdata from webpage inside the database:
// mongoose directly creates this table

const mongoose=require("mongoose")
const Schmea=mongoose.Schema
//
const blogSchema=new Schmea({
    title:{
        type:String //only string in title then it will be included in database otherwise not
    },
    subtitle:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

const Blog=mongoose.model("Blog",blogSchema)//if Blog then it will be 'Blogs'

module.exports=Blog