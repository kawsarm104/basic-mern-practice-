const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("i am back with more knowledge, wow it's working ");
});

app.listen(port, () => {
  console.log(`server is runnig at port ${3001}`);
});
