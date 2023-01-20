const myRouter = require("./my-router");
const express = require("express");
const app = express();

app.use("/my-router", myRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
