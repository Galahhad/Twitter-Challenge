const User = require("../models/User.model");
module.exports.userController = {
  postUser: async (req, res) => {
    try {
      const { name, biography } = req.body;
      await User.create({ name, biography });
      res.json("Пользователь добавлен");
    } catch (err) {
      res.json({ err: "Произошла ошибка при добавлении пользователя" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("Пользователь удален");
    } catch (err) {
      res.json({ err: "Произошла ошибка при удалении пользователя" });
    }
  },
  getUserById: async (req, res) => {
    try {
      const data = await User.findById(req.params.id).populate(
        "saves",
        "title text"
      );
      res.json(data);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о пользователе",
      });
    }
  },
  getUsers: async (req, res) => {
    try {
      const data = await User.find({}).populate("saves", "title text");
      res.json(data);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о пользователях",
      });
    }
  },
  patchUserById: async (req, res) => {
    try {
      const { name, biography } = req.body;
      await User.findByIdAndUpdate(req.params.id, { name, biography });
      res.json("Информация о пользователе обновлена");
    } catch (err) {
      res.json({
        err: "Произошла ошибка при обновлении информации о пользователе",
      });
    }
  },
  addSaves: async (req, res) => {
    try {
      const saves = req.body.saves;
      await User.findByIdAndUpdate(req.params.id, { $addToSet: { saves } });
      res.json("Пост сохранен");
    } catch (err) {
      res.json({ err: "Произошла ошибка при сохранении поста" });
    }
  },
  delSaves: async (req, res) => {
    try {
      const saves = req.body.saves;
      await User.findByIdAndUpdate(req.params.id, { $pull: { saves } });
      res.json("Сохраненный пост удален");
    } catch (err) {
      res.json({ err: "Произошла ошибка при удалении поста" });
    }
  },
};
