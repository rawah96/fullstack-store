const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const userSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//       trim: true,
//       min: 3,
//       max: 20,
//     },
//     lastName: {
//       type: String,
//       required: true,
//       trim: true,
//       min: 3,
//       max: 20,
//     },
//     username: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//       index: true,
//       lowercase: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//       lowercase: true,
//     },
//     hash_password: {
//       type: String,
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: ["user", "admin"],
//       default: "user",
//     },
//     contactNumber: { type: String },
//     pofilePicture: { type: String },
//   },
//   { timestamps: true }
// );


// userSchema.virtual("fullName").get(function () {
//   return `${this.firstName} ${this.lastName}`;
// });

// userSchema.methods = {
//   authenticate: async function (password) {
//     return await bcrypt.compare(password, this.hash_password);
//   },
// };

// module.exports = mongoose.model("User", userSchema);
