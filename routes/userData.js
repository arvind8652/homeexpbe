const router = require("express").Router();
let UserData = require("../models/userData.model");

router.route("/").get((req, res) => {
  UserData.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const phoneNo = req.body.phoneNo;
  const password = req.body.password;
  const newUserData = new UserData({ name, phoneNo, password });

  newUserData
    .save()
    .then(() => res.json("New User Data added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
