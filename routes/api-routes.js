const db = require("../models");

module.exports = function(app) {
    app.get("/api/dataPoints", function(req, res) {
        db.DataPoints.findAll({}).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });

    app.post("/api/dataPoints", function(req, res) {
        db.dataPoints.create({
            prospectName: req.body.prospectName,
            planSelect: req.body.planSelect,
            numOfUsers: req.body.numOfUsers,
            employeeCost: req.body.employeeCost,
            dataCollection: req.body.dataCollection,
            dataProcessing: req.body.dataProcessing,
            dataSecurity: req.body.dataSecurity,
            emailVolume: req.body.emailVolume,
            ROI: req.body.ROI,
            savingsPerUser: req.body.savingsPerUser
        }).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });
};