module.exports = function(sequelize, DataTypes) {
    var MultiyearROI = sequelize.define("multiyearROI", {
            companyName: DataTypes.STRING,
        // Turnover and Recruitment Savings
            // Employee Turnover Cost Savings Inputs
            lastFiscalYearEnd: DataTypes.DATE,
            totEBOY: DataTypes.STRING,
            totEEOY: DataTypes.STRING,
            totEEOY1: DataTypes.STRING,
            totEwVoluntaryExit: DataTypes.STRING,
            avgTurnoverCostVoluntaryExit: DataTypes.STRING,
            productTurnoverSavings: DataTypes.STRING,
            // Recruiting Cost Inputs
            avgDaysPostingToAccept: DataTypes.STRING,
            totRecruitingExpenses: DataTypes.STRING,
            productRecruitingSavings: DataTypes.STRING,
        // Personnel Efficiencies
            // HR Admin Time Savings
            totHREmployeesAdminEmployeePrograms: DataTypes.STRING,
            totHREmployeesAdminEmployeePrograms1: DataTypes.STRING,
            percentageShareOfHREmployeesTimeAdminEmployeePrograms: DataTypes.STRING,
            avgSalaryHREmployee: DataTypes.STRING,
            reductionManagingProgramsHREmployee: DataTypes.STRING,
            // Employee Productiving Savings
            avgAnnualSalaryGeneralEmployee: DataTypes.STRING,
            increaseGeneralEmployeeProductivity: DataTypes.STRING,
        // Investment Inputs
            suggestedUserMax: DataTypes.STRING,
            annualSoftwareFees: DataTypes.STRING,
            oneTimeImplimentationFee: DataTypes.STRING,
        // Program and Tool Enrichment Inputs
            existingProvidersCost: DataTypes.STRING,
            rewardsProgramOtherCompany: DataTypes.STRING,
        // ROI Inputs
            savingsAssumption1: DataTypes.STRING,
            savingsAssumption2: DataTypes.STRING,
    });
    return MultiyearROI;
};