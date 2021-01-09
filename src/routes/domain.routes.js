const express = require("express");
const router = express.Router();
const domainController = require("../controllers/domain.controller");

// Retrieve all domain
router.get("/", domainController.findAll);

// Create a new domain
router.post("/", domainController.create);

// Retrieve a single domain with id
router.get("/:DomainID", domainController.findById);

// Update a domain with id
router.put("/:DomainID", domainController.update);

// Delete a domain with id
router.delete("/:DomainID", domainController.delete);

module.exports = router;

/*
{
"Domain_Status":"DDDD",
"Domain_URL":"DDDD",
"Domain_Quality":"DDDD",
"Domain_Link_SampleA":"DDDD",
"Domain_Link_SampleB":"DDDD",
"Domain_Comments":"DDDD",
"Domain_Link_Type":"DDDD",
"Domain_Industry":"DDDD",
"Domain_Link_Attribute":"DDDD",
"Domain_DA":"DDDD",
"Domain_DR":"DDDD",
"Domain_SEMRush":"DDDD",
"Domain_AHRef":"DDDD",
"Domain_RefDomCount":"DDDD",
"Domain_traffic_Country":"DDDD",
"Domain_Currency":"DDDD",
"Domain_Cost_Original":"DDDD",
"Domain_Cost_Nego":"DDDD",
"Domain_Cost_Comments":"DDDD",
"Domain_Office_Country":"DDDD",
"Domain_Contact_Person":"DDDD",
"Domain_Contact_EmailA":"DDDD",
"Domain_Contact_EmailB":"DDDD",
"Domain_Contact_Phone":"DDDD"
}
*/
