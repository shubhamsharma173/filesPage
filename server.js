const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("files"));

const testFolder = "./files/";
let files = [];
fs.readdirSync(testFolder).forEach((file) => {
  //   console.log(file);
  files.push(file);
});
app.get("/", (req, res) => {
  // console.log(files);
  res.render("page", { list: files });
});

app.get("/download/:name", function (req, res) {
  const file = `${__dirname}/files/` + req.params.name;
  res.download(file); // Set disposition and send it.
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
