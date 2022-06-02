const express = require("express");
const chatRoute = express.Router();
const chatController =  require ("../controller/chatController");

chatRoute.post("/", chatController.addChat);
chatRoute.get("/", chatController.getAllChats);

module.exports = chatRoute;