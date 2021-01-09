"use strict";

const Master = require("../models/master.model");

exports.findAllmas = function (req, res) {
  Master.findAllmas(function (err, master) {
    console.log("controller findallmas");
    if (err) res.send(err);
    console.log("res", master);
    res.send(master);
  });
};

exports.createmas = function (req, res) {
  const new_master = new Master(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Master.createmas(new_master, function (err, master) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Master added successfully!",
        data: master,
      });
    });
  }
};

exports.findByIdmas = function (req, res) {
  Master.findByIdmas(req.params.MasterID, function (err, master) {
    if (err) res.send(err);
    res.json(master);
  });
};

exports.updatemas = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Master.updatemas(
      req.params.MasterID,
      new Master(req.body),
      function (err, master) {
        if (err) res.send(err);
        res.json({ error: false, message: "Master successfully updated" });
      }
    );
  }
};

exports.deletemas = function (req, res) {
  Master.deletemas(req.params.MasterID, function (err, master) {
    if (err) res.send(err);
    res.json({ error: false, message: "Master successfully deleted" });
  });
};
