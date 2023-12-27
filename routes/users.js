var express = require("express");
const { firebaseApp } = require("../library/firebase");
const { User } = require("../model/user");
var router = express.Router();
const jwt = require("jsonwebtoken");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/sign-in-with-firebase", async (req, res) => {
  try {
    const token = req.body.token;
    const decodedToken = await firebaseApp.auth().verifyIdToken(token);
    if (decodedToken.email) {
      const user = await User.findOne({ firebaseId: decodedToken.uid });
      if (user) {
        // Generate JWT token
        const token = jwt.sign(
          { id: user._id, role: user.role, name: user.name },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRE }
        );
        res.json({ token,user : {
          name: user.name,
          email: user.email,
          role: user.role,
          _id: user._id,
        } });
      } else {
        let newUser = new User({
          name: decodedToken.name,
          email: decodedToken.email,
          firebaseId: decodedToken.uid,
        });
        await newUser.save();
        // Generate JWT token
        const token = jwt.sign(
          { id: newUser._id, role: newUser.role, name: newUser.name },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRE }
        );
        res.json({ token,user : {
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          _id: newUser._id,
        } });
      }
    } else {
      res.status(404).json({ status: "error", message: "Sign in failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
});

module.exports = router;
