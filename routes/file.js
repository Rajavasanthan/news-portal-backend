var express = require('express');
const { getSignedUrl } = require('../library/aws');
var router = express.Router();

/* GET home page. */
router.get('/get-signed-url', async function(req, res, next) {
  try {
    const url = getSignedUrl(`${req.query.filename}`)
    res.json({url})
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
