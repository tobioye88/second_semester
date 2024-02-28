import * as userService from "../services/user.service.js";

export const create = async (req, res) => {
  const dto = req.body;
  const user = await userService.create(dto);
  res.json({ message: "User Created", user });
};

export const findById = async (req, res) => {
  const { userId } = req.params;
  const user = await userService.findById(userId);
  res.json({ message: "Success", user });
};
