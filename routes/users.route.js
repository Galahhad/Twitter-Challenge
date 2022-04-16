const { Router } = require("express");
const { userController } = require("../controllers/users.controllers");

const router = Router();

router.post("/user", userController.postUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/user/:id", userController.getUserById);
router.get("/users", userController.getUsers);
router.patch("/user/:id", userController.patchUserById);
router.patch("/user/:id/saves", userController.addSaves);
router.patch("/user/:id/delete/saves", userController.delSaves);

module.exports = router;
