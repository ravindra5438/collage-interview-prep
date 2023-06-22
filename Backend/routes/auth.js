const express = require("express");
const { login,signUp } = require("../controller/auth");
const router = express.Router();

router.post("/api/v1/auth/login",login);

router.post("/api/v1/auth/signUp",signUp)

module.exports = router;