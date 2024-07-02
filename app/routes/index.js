const express = require("express");
const router = express.Router();
const fs = require("fs");

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExte = removeExtension(file);
  const skip = ["index"].includes(fileWithOutExte);
  if (!skip) {
    router.use(`/${fileWithOutExte}`, require(`./${fileWithOutExte}`));
    console.log("Load route---->", fileWithOutExte);
  }
});

router.get("*", (req, res) => {
  res.status(404);
  res.send({ error: "Not found" });
});

module.exports = router;
