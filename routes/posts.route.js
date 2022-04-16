const { Router } = require("express");
const { postController } = require("../controllers/posts.controller");

const router = Router();

router.post("/user/:id/post", postController.postPost);
router.delete("/post/:id", postController.deletePost);
router.get("/post/:id", postController.getPostById);
router.get("/posts", postController.getPosts);
router.get("/user/:id/posts", postController.getPostsByUser);
router.patch("/post/:id", postController.patchPost);
router.patch("/post/:id/like", postController.addLike);
router.patch("/post/:id/del/like", postController.delLike);

module.exports = router;
