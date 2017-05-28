const express = require("express");
const router = express.Router();

import { renderToString } from "react-dom/server";
import BlogPage from "../public/javascripts/components/BlogPage";
import React from "react";

/* GET home page. */
router.get("/", function(req, res) {
  const markup = renderToString(<BlogPage />);

  res.render("index", {
    title: "Express",
    markup: markup
  });
});

module.exports = router;
