const express = require("express");
const app = express();

const logger = require("./logger");

app.get("/", (req, res, next) => {
  try {
    // logger.info("message-1");
    logger.info({
      b: { c: "hello", d: "world" },
      b1: "b1-trongnv",
      level: "error",
      label: "label-fix",
    });
    // logger.info({
    //   "@fields": { b: { c: "hello", d: "world" }, b1: "b1-trongnv" },
    //   "@trongnv": "trongnv",
    // });
    res.json({ status: "App health set to 'false'" });
  } catch (error) {
    console.log(error);
    res.json({ status: "App health set to 'false'" });
  }
});

app.listen("3000", () => {
  console.log(`App listening on port ${3000}!`);
});
