const express = require("express");
const cors = require("cors");
const port = 3039;
const uploadFile = require("./controller");
const upload = require("./upload.middleware");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});
app.post("/upload", upload.single("file"), uploadFile);

app.listen(port, () => {
  console.log(`Server is listening on port : http://localhost:${port}`);
});

require("./config");
