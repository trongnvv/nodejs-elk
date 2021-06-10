var winston = require("winston");

require("winston-logstash");

module.exports = new winston.Logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.Logstash({
      port: 28777,
      node_name: "my node name",
      host: "127.0.0.1",
    }),
  ],
});
