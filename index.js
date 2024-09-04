const express = require("express");
const app = express();
const path = require("path");
const PORT = 14261;

// Middleware to parse URL-encoded request bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// Serve the registration form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/circle.html");
  });
  app.get("/triangle", (req, res) => {
    res.sendFile(__dirname + "/triangle.html") ;
  });
  
  app.post("/triangle", (req, res) => {
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base * height;
    res.send(`<h2>Area of Triangle is : ${area}</h2>`);
  });
  app.post("/circle", (req, res) => {
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h2>Area of Circle is : ${area}</h2>`);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
