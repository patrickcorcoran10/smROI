const db = require("../models");

module.exports = function(app) {
    app.get("/api/dataPoints", function(req, res) {
        db.DataPoints.findAll({}).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });

    app.post("/api/dataPoints", function(req, res) {
        db.dataPoints.create({
            data1: req.body.data1,
            data2: req.body.data2,
            data3: req.body.data3,
            data4: req.body.data4,
            data5: req.body.data5,
            data6: req.body.data6,
            data7: req.body.data7,
            data8: req.body.data8,
            data9: req.body.data9
        }).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });
};