// routes.js
const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.post("/register", userController.register);
router.get("/verify/:userId/:token", userController.verifyEmail);

module.exports = router;
