"user strict";
var dbConn = require("../../config/db.config");

//Domain object create
var Domain = function (domain) {
  this.Domain_Name = domain.Domain_Name;
  this.Domain_Status = domain.Domain_Status;
  this.Domain_URL = domain.Domain_URL;
  this.Domain_Quality = domain.Domain_Quality;
  this.Domain_Link_SampleA = domain.Domain_Link_SampleA;
  this.Domain_Link_SampleB = domain.Domain_Link_SampleB;
  this.Domain_Link_SampleC = domain.Domain_Link_SampleC;
  this.Domain_Link_SampleD = domain.Domain_Link_SampleD;
  this.Domain_Link_SampleE = domain.Domain_Link_SampleE;
  this.Domain_Link_SampleF = domain.Domain_Link_SampleF;
  this.Domain_Link_SampleG = domain.Domain_Link_SampleG;
  this.Domain_Link_SampleH = domain.Domain_Link_SampleH;
  this.Domain_Link_SampleI = domain.Domain_Link_SampleI;
  this.Domain_Link_SampleJ = domain.Domain_Link_SampleJ;
  this.Domain_Comments = domain.Domain_Comments;
  this.Domain_Link_Type = domain.Domain_Link_Type;
  this.Domain_Industry = domain.Domain_Industry;
  this.Domain_Link_Attribute = domain.Domain_Link_Attribute;
  this.Domain_DA = domain.Domain_DA;
  this.Domain_DR = domain.Domain_DR;
  this.Domain_SEMRush = domain.Domain_SEMRush;
  this.Domain_AHRef = domain.Domain_AHRef;
  this.Domain_RefDomCount = domain.Domain_RefDomCount;
  this.Domain_traffic_Country = domain.Domain_traffic_Country;
  this.Domain_Currency = domain.Domain_Currency;
  this.Domain_Cost_Original = domain.Domain_Cost_Original;
  this.Domain_Cost_Nego = domain.Domain_Cost_Nego;
  this.Domain_Cost_Comments = domain.Domain_Cost_Comments;
  this.Domain_Office_Country = domain.Domain_Office_Country;
  this.Domain_Contact_Person = domain.Domain_Contact_Person;
  this.Domain_Contact_EmailA = domain.Domain_Contact_EmailA;
  this.Domain_Contact_EmailB = domain.Domain_Contact_EmailB;
  this.Domain_Contact_EmailC = domain.Domain_Contact_EmailC;
  this.Domain_Contact_PhoneA = domain.Domain_Contact_PhoneA;
  this.Domain_Contact_PhoneB = domain.Domain_Contact_PhoneB;
  this.Creation_Date = new Date();
  this.Updation_Date = new Date();
};

Domain.create = function (newDom, result) {
  dbConn.query("INSERT INTO domain set ?", newDom, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Domain.findById = function (DomainID, result) {
  dbConn.query(
    "Select * from domain where DomainID = ? ",
    DomainID,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
        // console.log(res);
      }
    }
  );
};

Domain.findAll = function (result) {
  dbConn.query("Select * from domain", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("domain : ", res);
      result(null, res);
    }
  });
};

Domain.update = function (DomainID, domain, result) {
  const keys = Object.keys(domain);
  let qry = "UPDATE domain SET ";
  let data = [];
  keys.forEach((item, index) => {
    if (domain[item] && item !== "Creation_Date" && item !== "Updation_Date") {
      if (index === 0) qry += item + " =?";
      else qry += "," + item + " =?";
      data.push(domain[item]);
    }
  });
  qry += "WHERE DomainID =" + DomainID;
  console.log(domain);
  dbConn.query(
    // "UPDATE domain SET Domain_Name =?,Domain_Status =?,Domain_URL =?,Domain_Quality =?,Domain_Link_SampleA =?,Domain_Link_SampleB =?,Domain_Link_SampleC =?,Domain_Link_SampleD =?,Domain_Link_SampleE =?,Domain_Link_SampleF =?,Domain_Link_SampleG =?,Domain_Link_SampleH =?,Domain_Link_SampleI =?,Domain_Link_SampleJ =?,Domain_Comments =?,Domain_Link_Type =?,Domain_Industry =?,Domain_Link_Attribute =?,Domain_DA =?,Domain_DR =?,Domain_SEMRush =?,Domain_AHRef =?,Domain_RefDomCount =?,Domain_traffic_Country =?,Domain_Currency =?,Domain_Cost_Original =?,Domain_Cost_Nego =?,Domain_Cost_Comments =?,Domain_Office_Country =?,Domain_Contact_Person =?,Domain_Contact_EmailA =?,Domain_Contact_EmailB =?,Domain_Contact_EmailC =?,Domain_Contact_PhoneA =?,Domain_Contact_PhoneB =? WHERE DomainID =?",
    qry,
    data,
    // [
    // domain.Domain_Name,
    // domain.Domain_Status,
    // domain.Domain_URL,
    // domain.Domain_Quality,
    // domain.Domain_Link_SampleA,
    // domain.Domain_Link_SampleB,
    // domain.Domain_Link_SampleC,
    // domain.Domain_Link_SampleD,
    // domain.Domain_Link_SampleE,
    // domain.Domain_Link_SampleF,
    // domain.Domain_Link_SampleG,
    // domain.Domain_Link_SampleH,
    // domain.Domain_Link_SampleI,
    // domain.Domain_Link_SampleJ,
    // domain.Domain_Comments,
    // domain.Domain_Link_Type,
    // domain.Domain_Industry,
    // domain.Domain_Link_Attribute,
    // domain.Domain_DA,
    // domain.Domain_DR,
    // domain.Domain_SEMRush,
    // domain.Domain_AHRef,
    // domain.Domain_RefDomCount,
    // domain.Domain_traffic_Country,
    // domain.Domain_Currency,
    // domain.Domain_Cost_Original,
    // domain.Domain_Cost_Nego,
    // domain.Domain_Cost_Comments,
    // domain.Domain_Office_Country,
    // domain.Domain_Contact_Person,
    // domain.Domain_Contact_EmailA,
    // domain.Domain_Contact_EmailB,
    // domain.Domain_Contact_EmailC,
    // domain.Domain_Contact_PhoneA,
    // domain.Domain_Contact_PhoneB,

    //   DomainID,
    // ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
        // console.log(res);
      }
    }
  );
};

Domain.delete = function (DomainID, result) {
  dbConn.query(
    "DELETE FROM domain WHERE DomainID = ?",
    [DomainID],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Domain;
