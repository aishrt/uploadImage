const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/fotu")
  .then(() => console.log("DB connected successfully !"))
  .catch((error) => console.log("Error while connecting DB !", error));
