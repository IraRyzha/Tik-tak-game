import User from "./User.js";

class UserService {
  async create(user) {
    if (!user) {
      throw Error("bad request");
    }
    const createdUser = await User.create(user);
    return createdUser;
  }
  async getAll() {
    const users = await User.find();
    return users;
  }
  async getOne(id) {
    if (!id) {
      throw Error("user with this id is not exist");
    }
    const user = await User.findById(id);
    return user;
  }
  async update(user) {
    if (!user._id) {
      res.status(400).json({ message: "user with this id is not exist" });
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }
  async delete(id) {
    if (!id) {
      rres.status(400).json({ message: "user with this id is not exist" });
    }
    const deleteUser = await User.findByIdAndDelete(id);
    return deleteUser;
  }
}

export default new UserService();
