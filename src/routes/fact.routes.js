const express = require("express");
const router = express.Router();

router.get("/facts", (req, res) => {
  res.json({ message: "Fact route working" });
});

module.exports = router;
