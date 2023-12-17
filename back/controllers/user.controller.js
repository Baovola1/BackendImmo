import bcryptjs from "bcryptjs";
import User from "../models/user.js";
import {errorHandler} from "../utils/error.js";

export const test = (req, res) => {
  res.json({
    message: "API route is working",
  });
};

export const updatedUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));
  try {
    console.log("Request body:", req.body);
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    console.log("Updated user:", updatedUser);
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    console.error(error);
    next(error);
  }
};