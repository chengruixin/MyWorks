const router = require("express").Router();
const path = require("path");
router.get("/", (req, res) => {
  console.log("requested!");
  console.log(req);
  res.send("tested okay!");
});
router.get("/random", (req, res) => {
  console.log("request!!");
  let index = Math.floor(Math.random() * 500);

  res.sendFile(path.resolve(`./public/imgs/${index}.png`));
});

router.get("/:index", (req, res) => {
  const { index } = req.params;

  res.sendFile(path.resolve(`./public/imgs/${index}.png`));
});

module.exports = router;
