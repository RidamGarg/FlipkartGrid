const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:")); //This file will run every time So there is no need to connect with mongodb further
db.once("open", function () {});
app.use("/", productRouter);
app.use("/", userRouter);
app.use("/", adminRouter);

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "Oh boy Something went wrong";
  }
  res.status(statusCode).send(err.message);
});
app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on Port 5000");
});
