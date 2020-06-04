var MSG91 = require("msg91-node-v2");
const express = require("express");
const config = require("../config/key");
const router = express.Router();

const msg91 = new MSG91(config.API_KEY);

router.post("/", (req, res) => {
  const { number, message } = req.body;

  let options = {
    sender: config.SENDER_ID,
    route: config.ROUTE,
    country: config.COUNTRY_CODE,
    sms: [
      {
        message: message,
        to: [number],
      },
    ],
  };

  msg91
    .send(options)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

module.exports = router;
