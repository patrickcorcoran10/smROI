const db = require("../models");

module.exports = function(app) {
    // MultiyearROI Routes

    // Get route for Home page. Will get all entries into the database.
    app.get("/api/home", function(req, res) {
        db.multiyearROI.findAll({}).then(function(dbDataPoints) {
            res.json(dbDataPoints);
        });
    });

    // Delete route for home page
    app.delete("/api/delete:id", function(req, res) {
        db.multiyearROI.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbGoods) {
            res.json(dbGoods)
        });
    });

    // Post route for Form page

    app.post("/api/multiyearROI", function(req, res) {
        db.multiyearROI.create({
            companyName: req.body.companyName,
            clientName: req.body.clientName,
            clientEmail: req.body.clientEmail,
            lastFiscalYearEnd: req.body.lastFiscalYearEnd,
        // Turnover and Recruitment Savings
            // Employee Turnover Cost Savings Inputs
            totEBOY: req.body.totEBOY,
            totEEOY: req.body.totEEOY,
            totEEOY1: req.body.totEEOY1,
            totEwVoluntaryExit: req.body.totEwVoluntaryExit,
            avgTurnoverCostVoluntaryExit: req.body.avgTurnoverCostVoluntaryExit,
            productTurnoverSavings: req.body.productTurnoverSavings,
             // Recruiting Cost Inputs
            avgDaysPostingToAccept: req.body.avgDaysPostingToAccept,
            totRecruitingExpenses: req.body.totRecruitingExpenses,
            productRecruitingSavings: req.body.productRecruitingSavings,
        // // Personnel Efficiencies
        //     // HR Admin Time Savings
            totHREmployeesAdminEmployeePrograms: req.body.totHREmployeesAdminEmployeePrograms,
            totHREmployeesAdminEmployeePrograms1: req.body.totHREmployeesAdminEmployeePrograms1,
            percentageShareOfHREmployeesTimeAdminEmployeePrograms: req.body.percentageShareOfHREmployeesTimeAdminEmployeePrograms,
            avgSalaryHREmployee: req.body.avgSalaryHREmployee,
            reductionManagingProgramsHREmployee: req.body.reductionManagingProgramsHREmployee,
        //     // Employee Productiving Savings
            avgAnnualSalaryGeneralEmployee: req.body.avgAnnualSalaryGeneralEmployee,
            increaseGeneralEmployeeProductivity: req.body.increaseGeneralEmployeeProductivity,
        // // Investment Inputs
            suggestedUserMax: req.body.suggestedUserMax,
            annualSoftwareFees: req.body.annualSoftwareFees,
            oneTimeImplimentationFee: req.body.oneTimeImplimentationFee,
        // // Program and Tool Enrichment Inputs
            existingProvidersCost: req.body.existingProvidersCost,
            rewardsProgramOtherCompany: req.body.rewardsProgramOtherCompany,
        // // ROI Inputs
            savingsAssumption1: req.body.savingsAssumption1,
            savingsAssumption2: req.body.savingsAssumption2,
        }).then(function(dbGoods) {
            res.json(dbGoods);
        });
    });

    

// //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Start.js Routes
    // app.get("/api/dataPoints", function(req, res) {
    //     db.DataPoints.findAll({}).then(function(dbDataPoints) {
    //         res.json(dbDataPoints);
    //     });
    // });

    // app.post("/api/dataPoints", function(req, res) {
    //     db.dataPoints.create({
    //         prospectName: req.body.prospectName,
    //         planSelect: req.body.planSelect,
    //         numOfUsers: req.body.numOfUsers,
    //         employeeCost: req.body.employeeCost,
    //         dataCollection: req.body.dataCollection,
    //         dataProcessing: req.body.dataProcessing,
    //         dataSecurity: req.body.dataSecurity,
    //         emailVolume: req.body.emailVolume,
    //         ROI: req.body.ROI,
    //         savingsPerUser: req.body.savingsPerUser
    //     }).then(function(dbDataPoints) {
    //         res.json(dbDataPoints);
    //     });
    // });
};