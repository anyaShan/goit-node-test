const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

// --------- зіставляє cotact та contact.

// app.get("/con?tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// ---------зіставляє contact, conntact, connntact і т.д.

// app.get("/con+tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

// ----------зіставляє contact, conxtact, con123tact і т.д.

// app.get("/con*tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
