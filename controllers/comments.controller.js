const Comment = require("../models/Comment.model");
module.exports.commentController = {
  postComment: async (req, res) => {
    try {
      const user = req.params.us;
      const post = req.params.po;
      const text = req.body.text;
      await Comment.create({ user, text, post });
      res.json("Комментарий добавлен");
    } catch (err) {
      res.json({ err: "Произошла ошибка при добавления комментария" });
    }
  },
  deleteCommentById: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.json("Комментарий удален");
    } catch (err) {
      res.json({ err: "Произошла ошибка при удалениии комментария" });
    }
  },
  getCommentsByPost: async (req, res) => {
    try {
      const data = await Comment.find({ post: req.params.id }).populate(
        "user post",
        "name title"
      );
      res.json(data);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о комментарии под постом",
      });
    }
  },
  getCommentsByUser: async (req, res) => {
    try {
      const data = await Comment.find({ user: req.params.id }).populate(
        "user post",
        "name title"
      );
      res.json(data);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о комментарии пользователя",
      });
    }
  },
  getCommentById: async (req, res) => {
    try {
      const data = await Comment.findById(req.params.id).populate(
        "user post",
        "name title"
      );
      res.json(data);
    } catch (err) {
      res.json({
        err: "Произошла ошибка при получении информации о комментарии",
      });
    }
  },
  patchCommentById: async (req, res) => {
    try {
      const text = req.body.text;
      await Comment.findByIdAndUpdate(req.params.id, { text });
      res.json("Комментарий пользователя обновлен");
    } catch (err) {
      res.json({
        err: "Произошла ошибка при обновлении информации комментария пользователя",
      });
    }
  },
};
