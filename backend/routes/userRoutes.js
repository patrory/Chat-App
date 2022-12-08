const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUser,
} = require("../contollers/userControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.route("/").get(protect, allUser);
router.post("/login", authUser);

module.exports = router;
