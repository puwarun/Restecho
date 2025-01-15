let restecho = require("./build");
let express = require("express");

let app = express();
app.use(restecho.expressMiddleware());

app.get("/test/1", (req, res) => {
  res.status(500).respond(0, "Success", null);
});

app.get("/test/2", (req, res) => {
  res.status(500).respond("0", "Success", null);
});

app.get("/test/3", (req, res) => {
  let error = new Error("Message is empty!!!!!!!");
  res.status(502).respond(0, "", "");
});

app.get("/test/4", (req, res) => {
  res
    .status(200)
    .respond(0, "Success", null, {
      pageSize: 10,
      currentPage: 1,
      totalPages: 1,
    });
});

app.listen(5000);
