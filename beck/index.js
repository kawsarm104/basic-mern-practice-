const express = require("express");
const cors = require("cors");

const app = express();

const users = [
  { id: 0, name: "Shabana", email: "Shabana@gmail.com", phone: "01788888888" },
  {
    id: 1,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: 2,
    name: "Shrabonti",
    email: "Shrabonti@gmail.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "01788888888",
  },
  { id: 4, name: "Soniya", email: "Soniya@gmail.com", phone: "01788888888" },
  { id: 5, name: "Susmita", email: "Susmita@gmail.com", phone: "01788888888" },
];

app.get("/", (req, res) => {
  res.send("i am back with more knowledge, wow it's working ");
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/users/:id", (req, res) => { //Dynamic route
    const searchId = req.params.id
    const user = users[searchId]// array theke nitaci 1 ta user information re 
    console.log(req.params.id);// ja patahaise tare khujtase 
    res.send(user)
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is runnig at port ${3001}`);
});
