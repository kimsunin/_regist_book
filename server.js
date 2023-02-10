import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; //post로 받은 데이터의 body부분을 읽기위해서 안쓰면 제대로 못읽는다
const app = express();

const user = [
  {
    username: "changmin",
    password: "1234",
  },
  {
    username: "sunin",
    password: "1234",
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
//rending할때 종류가 많아서 html로 해주기 위해 쓴다
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const postLogin = (req, res) => {
  const postUsername = req.body.username;
  const postPassword = req.body.password;

  console.log(postUsername, postPassword, "받아졌음");
};
const getLogin = (req, res) => {
  res.render("a.html");
};
app.route("/").get(getLogin).post(postLogin);
// app.post("/", postLogin);

// app.get("/", getLogin);

app.listen(4000, () => console.log("✅server is listening!"));
