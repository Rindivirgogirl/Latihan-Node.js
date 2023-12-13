const express = require('express')

const app = express()
const port = 4000
app.use(express.json());

app.get("/get-user", function (req, res) {
    res.json({
      message: " success get data",
      username: "rinduyyyyy",
      email: "rinduy@gmail.com",
      password: 123,
  
    })
})

app.post("/create-user", function (req, res) {
  const {username, email, password} = req.body;
  
  res.json({
    message: " success get data",
    username: username,
    email: email,
    password: password,

  })
})

app.put("/create-user", function (req, res) {
  const {username, email, password} = req.body;
  
  res.json({
    message: " success get data",
    username: username,
    email: email,
    password: password,

  })
})

app.delete("/delete-user", function (req, res) {
  res.json({
    message: " success get data",
   

  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
