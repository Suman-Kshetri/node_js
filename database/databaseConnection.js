//to include database//...
const mongoose=require("mongoose");
async function connectToDb(){
    await mongoose.connect("mongodb+srv://ksuman20601028:s10022006k@cluster0.zf76yxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database Connected")

}
module.exports=connectToDb //to export database