const express = require("express");
const router = express.Router();
const cors = require("cors");

const corsOptions ={
    origin:'localhost:3000', 
    optionSuccessStatus:200
}

router.use(cors(corsOptions));

router.get("/", (req, res) => {
  res.send({ response: "Success" }).status(200);
});

module.exports = router;