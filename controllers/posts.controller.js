const Post = require("../models/Post.model");
module.exports.postController = {
  postPost: async (req, res) => {
    try {
      const user = req.params.id;
      const { title, text } = req.body;
      await Post.create({ user, title, text });
      res.json("Пост опубликован");
    } catch (err) {
      res.json({ err: "Произошла ошибка при добавлении поста" });
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.json("Пост удален");
    } catch (err) {
      res.json({ err: "Произошла ошибка при удалении поста" });
    }
  },
  getPostById: async (req, res) => {
    try {
      const data = await Post.findById(req.params.id).populate("user", "name");
      res.json(data);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении информации о посте" });
    }
  },
  getPosts: async (req, res) => {
    try {
      const data = await Post.find({}).populate("user", "name");
      res.json(data);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении информации о постах" });
    }
  },
  getPostsByUser: async (req, res) => {
    try {
      const data = await Post.find({ user: req.params.id }).populate(
        "user",
        "name"
      );
      res.json(data);
    } catch (err) {
      res.json({ err: "Произошла ошибка при получении информации о постах" });
    }
  },
  patchPost: async (req, res) => {
    try {
      const { title, text } = req.body;
      await Post.findByIdAndUpdate(req.params.id, { title, text });
      res.json("Информация о посте обновлена");
    } catch (err) {
      res.json({ err: "Произошла ошибка при обновлении информации о посте" });
    }
  },
  addLike: async (req, res) => {
    try {
      const like = req.body.like;
      await Post.findByIdAndUpdate(req.params.id, { $addToSet: { like } });
      res.json("Лайк добавлен");
    } catch (err) {
      res.json({ err: "Произошла ошибка при добаления лайка" });
    }
  },
  delLike: async (req, res) => {
    try {
      const like = req.body.like;
      await Post.findByIdAndUpdate(req.params.id, { $pull: { like } });
    } catch (err) {
      res.json({ err: "Произошла ошибка при удалении лайка" });
    }
  },
};
