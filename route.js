const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
require("dotenv").config();
const key = process.env.API_KEY;

router.get("/:game/standard/profile/:platform/:id", async (req, res) => {
  const { game, platform, id } = req.params;
  console.log("platform:", platform, "id:", id);
  const response = await fetch(
    `https://public-api.tracker.gg/v2/${game}/standard/profile/${platform}/${id}`,
    {
      headers: {
        "TRN-Api-Key": key
      }
    }
  );
  const data = await response.json();
  console.log("data:-", data);
  res.json(data);
});

router.get("/api", (req, res) => {
  res.send("hello");
});

module.exports = router;
