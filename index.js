const express = require("express");
const app = express();

const logger = require("./logger");

app.get("/", (req, res, next) => {
  try {
    logger.info("[trongnv] info");
    res.json({ status: "App health set to 'false'" });
  } catch (error) {
    console.log(error);
    res.json({ status: "App health set to 'false'" });
  }
});

app.listen("3000", () => {
  console.log(`App listening on port ${3000}!`);
});
