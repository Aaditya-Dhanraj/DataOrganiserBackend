"user strict";
var dbConn = require("../../config/db.config");

//Master object create
var Master = function (master) {
  this.Master_Name = master.Master_Name;
  this.Master_Table = master.Master_Table;
  this.Master_Comments = master.Master_Comments;
  this.Creation_Date = new Date();
  this.Updation_Date = new Date();
};

Master.createmas = function (newMaster, result) {
  dbConn.query("INSERT INTO master set ?", newMaster, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Master.findByIdmas = function (MasterID, result) {
  dbConn.query(
    "Select * from master where MasterID = ? ",
    MasterID,
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

Master.findAllmas = function (result) {
  dbConn.query("Select * from master", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("master : ", res);
      result(null, res);
    }
  });
};

Master.updatemas = function (MasterID, master, result) {
  const keys = Object.keys(master);
  let qry = "UPDATE master SET ";
  let data = [];
  keys.forEach((item, index) => {
    if (master[item] && item !== "Creation_Date" && item !== "Updation_Date") {
      if (index === 0) qry += item + " =?";
      else qry += "," + item + " =?";
      data.push(master[item]);
    }
  });
  qry += "WHERE MasterID =" + MasterID;
  console.log(master);
  dbConn.query(qry, data, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
      // console.log(res);
    }
  });
};

Master.deletemas = function (MasterID, result) {
  dbConn.query(
    "DELETE FROM master WHERE MasterID = ?",
    [MasterID],
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

module.exports = Master;
