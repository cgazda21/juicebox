const express = require("express");

function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message:
        "You must be logged in to perform this action.  Please try again.",
    });
  }

  next();
}

module.exports = {
  requireUser,
};
