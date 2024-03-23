import User from "../database/schema/user.schema.js";
import { ErrorWithStatus } from "../exceptions/error-with-status.exception.js";

export const getAllUsers = async (page = 1, limit = 10, query = null) => {
  try {
    // page 1, limit 10, total 100
    const skip = (page - 1) * limit;
    // page 1 == skip 0,
    // page 2 == skip 10,
    // page 3 == skip 20,
    // page 4 == skip 30
    // const filter = query ? { name: query } : {};
    // if value is "test" or 'test@mail.com'
    const filter = query ? { name: { $regex: query, $options: "i" } } : {};
    const users = await User.find(filter, {
      password: 0,
    })
      .skip(skip)
      .limit(limit);
    const total = await User.countDocuments(filter);
    return { data: users, meta: { page, limit, total } };
  } catch (error) {
    throw new ErrorWithStatus(error.message, 500);
  }
};

/**
 * Post:
 * {
 * title: string
 * body: string
 * user: Ref<User>
 * }
 * const users = await Post.find(filter, {
      password: 0,
      __v: 0,
      populate: {
        path: "user",
        select: "-password",
      }
    })
      .skip(skip)
      .limit(limit);
 */
