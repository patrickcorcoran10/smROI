module.exports = function(sequelize, DataTypes) {
    var DataPoints = sequelize.define("dataPoints", {
        prospectName: DataTypes.STRING,
        planSelect: DataTypes.STRING,
        numOfUsers: DataTypes.STRING,
        employeeCost: DataTypes.STRING,
        dataCollection: DataTypes.STRING,
        dataProcessing: DataTypes.STRING,
        dataSecurity: DataTypes.STRING,
        emailVolume: DataTypes.STRING,
        ROI: DataTypes.STRING,
        savingsPerUser: DataTypes.STRING

    });
    return DataPoints;
};