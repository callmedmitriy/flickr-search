const express = require("express");

const router = require("./router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/opencv", router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});