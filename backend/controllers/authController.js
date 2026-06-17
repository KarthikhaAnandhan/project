const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match)
      return res.status(400).json({
        message: "Invalid password",
      });

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};