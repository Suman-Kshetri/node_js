const express = require("express"); //include express package in our file
const connectToDb = require("./database/databaseConnection"); //to connect to the database
const Blog = require("./model/blogModel");
const app = express(); //call the express function//app ma  object aayera baseko hunxag

// const multer = require("./middleware/multerConfig").multer;
// const storage = require("./middleware/multerConfig").storage;
const{multer,storage} = require('./middleware/multerConfig.js')
const upload = multer({storage: storage})

connectToDb(); //call funtion
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("vew engine", "ejs");

app.get("/homepage",async (req,res)=>{
  const blogs = await Blog.find()//always return array
  console.log(blogs);
  res.render("home.ejs",{blogs})
})


// app.get("/about",(req,res)=>{
//     res.send(`<h1>hello this is about page</h1>`)
// })
app.get("/about", (req, res) => {
  const name = "suman kshetri";
  res.render("about.ejs", { name });
});
app.get("/contact", (req, res) => {
  const name = "";
  const email = "ksuman20601028@gmail.com";
  res.render("about.ejs", { name, email });
});

//project --creating  blog
app.get("/createblog", (req, res) => {
  res.render("create_blog.ejs");
});
app.get("/homepage",async (req,res)=>
{
  const blogs=await Blog.find();
  console.log(blogs);

  res.render("home.ejs",{blogs});
})
app.get("/blogpage",(req,res)=>{
  res.render("blog.ejs");
})

app.post("/createblog", upload.single('image'),async (req, res) => {
const file=req.file.filename;
// console.log(file)

  const { title, subtitle, description } = req.body;
  console.log(title, subtitle, description);
  console.log(req.body);
  await Blog.create({
    title,
    subtitle,
    description,
    image: file
  })

  //   res.render(req.body);
  res.send("Block created sucessfully");
});

app.get("/blogpage/:id",async(req,res)=>
{
  const id=req.params.id;
  const blog = await Blog.findById(id);
  console.log(blog)
  res.render("blog.ejs",{blog})
})

app.use(express.static("./storage"));

app.listen(3000, () => {
  //3000 vhaneko kun port number chalaune vhaneko[in terminal]
  console.log(`Nodejs project has started ${3000}`);
});

app.get("/deleteblog/:id",async (req,res)=>
{
  const id=req.params.id;
  await Blog.findByIdAndDelete(id)
  res.redirect("/homepage")
})