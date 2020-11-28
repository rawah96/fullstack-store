// dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
// start app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// accessing json data in app
app.use(express.json());

// DB
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED .. !");
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connection successful");
});

app.use(bodyParser());
// routing
const usersRouter = require("./routes/auth");
const productRoutes = require("./routes/productRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const orderRoutes = require("./routes/orderRoutes");
app.use("/users/", usersRouter);
app.use("/products", productRoutes);
app.use("/orders", productRoutes);
app.use("/api/upload", uploadRoutes);
// const userRoutes = require('./routes/users');
// app.use('/users', userRoutes);

//const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// run server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
