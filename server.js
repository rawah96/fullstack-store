const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import colors from "colors";
// import morgan from "morgan";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// import connectDB from "./config/db.js";

// import productRoutes from "./routes/productRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

// const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// const _dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(_dirname, "/frontend/build")));

//   app.get("*", (_, res) => {
//     res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (_, res) => {
//     res.send("Api is running..");
//   });
// }

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

//const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running on ${process.env.NODE_ENV} port ${PORT}`)
);

// dependencies
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const path = require("path");
// require("dotenv").config();
// // start app
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// // accessing json data in app
// app.use(express.json());

// // DB
// const uri = process.env.ATLAS_URI;
// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DATABASE CONNECTED .. !");
//   });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("DB connection successful");
// });

// app.use(bodyParser());
// // routing
// const usersRouter = require("./routes/auth");
// const productRoutes = require("./routes/productRoutes");
// const uploadRoutes = require("./routes/uploadRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// app.use("/api/users", usersRouter);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", productRoutes);
// app.use("/api/upload", uploadRoutes);
// // const userRoutes = require('./routes/users');
// // app.use('/users', userRoutes);

// //const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// // production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // run server
// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
