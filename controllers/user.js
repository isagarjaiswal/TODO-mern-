import { User } from "../models/user.js";

export const getAlluser = async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Register successfully",
  });
};
