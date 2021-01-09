const express = require("express");
const router = express.Router();
const masterController = require("../controllers/master.controller");

// Retrieve all domain
router.get("/", masterController.findAllmas);

// Create a new domain
router.post("/", masterController.createmas);

// Retrieve a single domain with id
router.get("/:MasterID", masterController.findByIdmas);

// Update a domain with id
router.put("/:MasterID", masterController.updatemas);

// Delete a domain with id
router.delete("/:MasterID", masterController.deletemas);

module.exports = router;
