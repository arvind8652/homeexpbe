const router = require("express").Router();
let ExpDetail = require("../models/expDetail.model");

router.route("/").get((req, res) => {
  ExpDetail.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const amount = req.body.amount;
  const cardName = req.body.cardName;
  const cardType = req.body.cardType;
  const comment = req.body.comment;
  const necessity = req.body.necessity;
  const userID = req.body.userID;
  const newExpDetail = new ExpDetail({
    amount,
    cardName,
    cardType,
    comment,
    necessity,
    userID,
  });

  newExpDetail
    .save()
    .then(() => res.json("New Expense Data added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
