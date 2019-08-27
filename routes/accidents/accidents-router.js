const router = require("express").Router();

const db = require("../../data/dbConfig.js");

router.get("/", async (req, res) => {
  try {
    const list = await db("accidents");
    res.status(200).json(list);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong with the server." });
  }
});

router.post("/coords", async (req, res) => {
  const { LATITUDE, LONGITUD } = req.body;

  try {
    const list = await db("accidents")
      .whereBetween("LATITUDE", [LATITUDE - 1, LATITUDE + 1])
      .andWhereBetween("LONGITUD", [LONGITUD - 1, LONGITUD + 1]);
    res.status(200).json(list);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong with the server" });
  }
});

module.exports = router;
