"use strict";

const Domain = require("../models/domain.model");

exports.findAll = function (req, res) {
  Domain.findAll(function (err, domain) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", domain);
    res.send(domain);
  });
};

exports.create = function (req, res) {
  const new_domain = new Domain(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Domain.create(new_domain, function (err, domain) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Domain added successfully!",
        data: domain,
      });
    });
  }
};

exports.findById = function (req, res) {
  Domain.findById(req.params.DomainID, function (err, domain) {
    if (err) res.send(err);
    res.json(domain);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Domain.update(
      req.params.DomainID,
      new Domain(req.body),
      function (err, domain) {
        if (err) res.send(err);
        res.json({ error: false, message: "Domain successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
  Domain.delete(req.params.DomainID, function (err, domain) {
    if (err) res.send(err);
    res.json({ error: false, message: "Domain successfully deleted" });
  });
};
