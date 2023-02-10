import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; //post로 받은 데이터의 body부분을 읽기위해서 안쓰면 제대로 못읽는다
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
//rending할때 종류가 많아서 html로 해주기 위해 쓴다
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello express" });
});
app.post("/", (req, res) => {
  const name = req.body;
  console.log("받아졌음");
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.render("a.html");
});

app.listen(4000, () => console.log("✅server is listening!"));
