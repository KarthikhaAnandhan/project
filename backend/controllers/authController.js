const User = require("../models/User");

const signup = async (req, res) => {
  try {
    const {
      name,
      accountNumber,
      username,
      pin,
    } = req.body;

    if (
      !name ||
      !accountNumber ||
      !username ||
      !pin
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({
      $or: [
        { username },
        { accountNumber },
      ],
    });

    if (existingUser) {
      return res.status(400).json({
        message:
          "Username or Account Number already exists",
      });
    }

    const user = await User.create({
      name,
      accountNumber,
      username,
      pin,
      balance: 0,
    });

    res.status(201).json({
      message: "Account created successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, pin } = req.body;

    const user = await User.findOne({
      username,
      pin,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Username or PIN",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  signup,
  login,
};