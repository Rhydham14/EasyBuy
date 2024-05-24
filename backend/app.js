// app.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const routes = require("./Routes/routes");
require("./Connection/database");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));

app.use("/api/users", routes);
app.use("/", (req, res) => {
  res.send("temp api");
});

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});
