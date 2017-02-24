var express = require("express");
var appRouter = express.Router();
var call_request = require('/home/debugger2017/Idyllic/session_of_nodejs/tweet/module.js');


appRouter.get('/', function(req, res) {
  res.render('index', { check: check });
});

module.exports = appRouter;

