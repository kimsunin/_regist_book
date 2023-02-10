import express from "express";

const app = express();

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello express" });
});

app.listen(4000, () => console.log("✅server is listening!"));
