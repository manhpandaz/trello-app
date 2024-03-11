import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(8080, () => {
  console.log(`server is running on port http://localhost:${8080}`);
});
