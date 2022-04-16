const { Router } = require("express");
const { commentController } = require("../controllers/comments.controller");

const router = Router();

router.post("/post/:po/user/:us/comment", commentController.postComment);
router.delete("/comment/:id", commentController.deleteCommentById);
router.get("/post/:id/comments", commentController.getCommentsByPost);
router.get("/user/:id/comments", commentController.getCommentsByUser);
router.get("/comment/:id", commentController.getCommentById);
router.patch("/comment/:id", commentController.patchCommentById);

module.exports = router;
