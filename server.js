const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// start for database connection
//old method
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// new method
const dbUrl = process.env.ATLAS_URI;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.log("connected to the DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

// end for database connection
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const userDataRouter = require("./routes/userData");
const expDetailRouter = require("./routes/expDetail");
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/userData", userDataRouter);
app.use("/expDetail", expDetailRouter);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
