const express = require("express");
const { registerUser, loginUser, getUserDetails, forgotPassword, resetPassword, updateProfile, logout } = require("../controllers/userController");

const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(isAuthenticatedUser, getUserDetails)
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/me/update").put(isAuthenticatedUser, updateProfile)
router.route("/logout").get(logout)








module.exports = router