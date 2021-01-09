const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// create express app
const app = express();

app.use(cors());

// Setup server port
const port = 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const domainRoutes = require("./src/routes/domain.routes");
const masterRoutes = require("./src/routes/master.routes");

// using as middleware
app.use("/api/v1/domain", domainRoutes);
app.use("/api/v1/master", masterRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/*
CREATE PROCEDURE `DomainAddOrEdit`(
DomainID INT,
Domain_Name varchar(255),
Domain_Status varchar(255),
Domain_URL varchar(255),
Domain_Quality varchar(255),
Domain_Link_SampleA varchar(255),
Domain_Link_SampleB varchar(255),
Domain_Comments varchar(255),
Domain_Link_Type varchar(255),
Domain_Industry varchar(255),
Domain_Link_Attribute varchar(255),
Domain_DA varchar(255),
Domain_DR varchar(255),
Domain_SEMRush varchar(255),
Domain_AHRef varchar(255),
Domain_RefDomCount varchar(255),
Domain_traffic_Country varchar(255),
Domain_Currency varchar(255),
Domain_Cost_Original varchar(255),
Domain_Cost_Nego varchar(255),
Domain_Cost_Comments varchar(255),
Domain_Office_Country varchar(255),
Domain_Contact_Person varchar(255),
Domain_Contact_EmailA varchar(255),
Domain_Contact_EmailB varchar(255),
Domain_Contact_Phone varchar(255),
Updation_Date timestamp
)
BEGIN
IF _DomainID = 0 THEN
    INSERT INTO domain(
this.DomainID = domain.DomainID,
this.Domain_Status = domain.Domain_Status,
this.Domain_URL = domain.Domain_URL,
this.Domain_Quality = domain.Domain_Quality,
this.Domain_Link_SampleA = domain.Domain_Link_SampleA,
this.Domain_Link_SampleB = domain.Domain_Link_SampleB,
this.Domain_Comments = domain.Domain_Comments,
this.Domain_Link_Type = domain.Domain_Link_Type,
this.Domain_Industry = domain.Domain_Industry,
this.Domain_Link_Attribute = domain.Domain_Link_Attribute,
this.Domain_DA = domain.Domain_DA,
this.Domain_DR = domain.Domain_DR,
this.Domain_SEMRush = domain.Domain_SEMRush,
this.Domain_AHRef = domain.Domain_AHRef,
this.Domain_RefDomCount = domain.Domain_RefDomCount,
this.Domain_traffic_Country = domain.Domain_traffic_Country,
this.Domain_Currency = domain.Domain_Currency,
this.Domain_Cost_Original = domain.Domain_Cost_Original,
this.Domain_Cost_Nego = domain.Domain_Cost_Nego,
this.Domain_Cost_Comments = domain.Domain_Cost_Comments,
this.Domain_Office_Country = domain.Domain_Office_Country,
this.Domain_Contact_Person = domain.Domain_Contact_Person,
this.Domain_Contact_EmailA = domain.Domain_Contact_EmailA,
this.Domain_Contact_EmailB = domain.Domain_Contact_EmailB,
this.Domain_Contact_Phone = domain.Domain_Contact_Phone,
this.Updation_Date = domain.Updation_Date
),
END




DomainID =?,Domain_Status =?,Domain_URL =?,Domain_Quality =?,Domain_Link_SampleA =?,Domain_Link_SampleB =?,Domain_Comments =?,Domain_Link_Type =?,Domain_Industry =?,Domain_Link_Attribute =?,Domain_DA =?,Domain_DR =?,Domain_SEMRush =?,Domain_AHRef =?,Domain_RefDomCount =?,Domain_traffic_Country =?,Domain_Currency =?,Domain_Cost_Original =?,Domain_Cost_Nego =?,Domain_Cost_Comments =?,Domain_Office_Country =?,Domain_Contact_Person =?,Domain_Contact_EmailA =?,Domain_Contact_EmailB =?,Domain_Contact_Phone =?,
Updation_Date =?,

@DomainID,@Domain_Status,@Domain_URL,@Domain_Quality,@Domain_Link_SampleA,@Domain_Link_SampleB,@Domain_Comments,@Domain_Link_Type,@Domain_Industry,@Domain_Link_Attribute,@Domain_DA,@Domain_DR,@Domain_SEMRush,@Domain_AHRef,@Domain_RefDomCount,@Domain_traffic_Country,@Domain_Currency,@Domain_Cost_Original,@Domain_Cost_Nego,@Domain_Cost_Comments,@Domain_Office_Country,@Domain_Contact_Person,@Domain_Contact_EmailA,@Domain_Contact_EmailB,@Domain_Contact_Phone,
@Updation_Date

dom.DomainID, dom.Domain_Status, dom.Domain_URL, dom.Domain_Quality, dom.Domain_Link_SampleA, dom.Domain_Link_SampleB, dom.Domain_Comments, dom.Domain_Link_Type, dom.Domain_Industry, dom.Domain_Link_Attribute, dom.Domain_DA, dom.Domain_DR, dom.Domain_SEMRush, dom.Domain_AHRef, dom.Domain_RefDomCount, dom.Domain_traffic_Country, dom.Domain_Currency, dom.Domain_Cost_Original, dom.Domain_Cost_Nego, dom.Domain_Cost_Comments, dom.Domain_Office_Country, dom.Domain_Contact_Person, dom.Domain_Contact_EmailA, dom.Domain_Contact_EmailB, dom.Domain_Contact_Phone,
dom.Updation_Date


"DomainID":0,
"Domain_Status":"AAAA",
"Domain_URL":"AAAA",
"Domain_Quality":"AAAA",
"Domain_Link_SampleA":"AAAA",
"Domain_Link_SampleB":"AAAA",
"Domain_Comments":"AAAA",
"Domain_Link_Type":"AAAA",
"Domain_Industry":"AAAA",
"Domain_Link_Attribute":"AAAA",
"Domain_DA":"AAAA",
"Domain_DR":"AAAA",
"Domain_SEMRush":"AAAA",
"Domain_AHRef":"AAAA",
"Domain_RefDomCount":"AAAA",
"Domain_traffic_Country":"AAAA",
"Domain_Currency":"AAAA",
"Domain_Cost_Original":"AAAA",
"Domain_Cost_Nego":"AAAA",
"Domain_Cost_Comments":"AAAA",
"Domain_Office_Country":"AAAA",
"Domain_Contact_Person":"AAAA",
"Domain_Contact_EmailA":"AAAA",
"Domain_Contact_EmailB":"AAAA",
"Domain_Contact_Phone":"AAAA",
"Updation_Date":"AAAA"

*/
