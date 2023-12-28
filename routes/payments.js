var express = require("express");
const { razor } = require("../library/razorpay");
const { Subscription } = require("../model/subscription");
var router = express.Router();

/* GET home page. */
router.get("/create-order", async function (req, res, next) {
  try {
    const sub = await Subscription.findOne({ _id: req.query.sub_id });
    if (sub && sub.status) {
      const order = await razor.orders.create({
        amount: parseInt(sub.price) * 100,
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 1,
      });
      res.json(order);
    } else {
      res.json({ error: "Subscription not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/all-subscription", async function (req, res, next) {
  try {
    const sub = await Subscription.find();
    res.json(sub);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
