var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Seller.findAll({
      where: {
        show: true
      }
    }).then(function (Post) {
      res.render("home", Post);
    });
  });

  app.get("/buyitem", function (req, res) {
    res.render("buyItem");
  });


  app.get("/newitem", function (req, res) {
    res.render("newItem");
  });


  app.get("/index", function (req, res) {
    res.render("index");
  });

  // res.sendFile(path)
  // db.Example.findAll({}).then(function(dbExamples) {
  //   res.render("index", {
  //     msg: "Welcome!",
  //     examples: dbExamples
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
