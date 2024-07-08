const express = require("express"); //include express package in our file
const connectToDb = require("./database/databaseConnection"); //to connect to the database
const Blog = require("./model/blogModel");
const app = express(); //call the express function//app ma  object aayera baseko hunxag

connectToDb(); //call funtion
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("vew engine", "ejs");
app.get("/", (req, res) => {
  res.send("<h1>haha this is home page</h1>");
});
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

app.post("/createblog", async (req, res) => {
  const { title, subtitle, description } = req.body;
  console.log(title, subtitle, description);
//   console.log(req.body);
  await Blog.create({
    title,
    subtitle,
    description,
  })

  //   res.render(req.body);
  res.send("Block created sucessfully");
});
app.listen(3000, () => {
  //3000 vhaneko kun port number chalaune vhaneko[in terminal]
  console.log(`Nodejs project has started ${3000}`);
});
