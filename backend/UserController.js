import UserService from "./UserService.js";

class UserController {
  async create(req, res) {
    try {
      console.log(req.body);
      const createdUser = await UserService.create(req.body);
      console.log(createdUser);
      return res.json(createdUser);
    } catch (e) {
      res.json(e.message);
    }
  }
  async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      return res.json(users);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.getOne(id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async update(req, res) {
    try {
      const user = req.body;
      if (!user._id) {
        res.status(400).json({ message: "user with this id is not exist" });
      }
      const updatedUser = await UserService.update(user);
      return res.json(updatedUser);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "user with this id is not exist" });
      }
      const deletedUser = await UserService.delete(id);
      return res.json(deletedUser);
    } catch (e) {
      res.status(500).jsom(e.message);
    }
  }
}

export default new UserController();
