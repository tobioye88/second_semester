import User from "../database/schema/user.schema.js";

export const create = (dto) => {
  return User.create(dto);
};

export const findById = (id) => {
  return User.findById(id);
};
