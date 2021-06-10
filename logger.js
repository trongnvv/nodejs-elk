const winston = require("winston");
require("winston-logstash");
const consoleTransport = new winston.transports.Console({
  formatter: function (options) {
    return `${winston.config.colorize(
      options.level,
      options.level.toUpperCase()
    )} ${options.message || ""} ${
      options.meta ? JSON.stringify(options.meta) : ""
    }`;
  },
});

const logstashTransport = new winston.transports.Logstash({
  port: 28777,
  node_name: "my node name",
  host: "127.0.0.1",
  max_connect_retries: -1,
});

consoleTransport.on("error", (err) =>
  console.log("[ERROR] consoleTransport", err)
);

logstashTransport.on("error", (err) =>
  console.log("[ERROR] logstashTransport", err)
);

const logger = new winston.Logger({
  transports: [consoleTransport, logstashTransport],
});

module.exports = logger;
