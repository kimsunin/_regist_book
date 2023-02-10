import express from "express";
const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello express" });
});
app.get("/api/hi", (req, res) => {
  res.send("안녕하세요");
});
app.get("/api", (req, res) => {
  res.send("hi");
});
app.get("/",(req,res)=>{
  res.render('a.html')
});

app.listen(4000, () => console.log("✅server is listening!"));
