const winston = require("winston");
require("winston-logstash");
const consoleTransport = new winston.transports.Console();
const logstashTransport = new winston.transports.Logstash({
  port: 28777,
  node_name: "my node name",
  host: "127.0.0.1",
});

logstashTransport.on("error", (err) => console.log("err-r", err));

const logger = new winston.Logger({
  transports: [consoleTransport, logstashTransport],
});
logger.on("error", function (err) {
  console.log("err-trongnv", err);
});

module.exports = logger;
