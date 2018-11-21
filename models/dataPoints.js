module.exports = function(sequelize, DataTypes) {
    var DataPoints = sequelize.define("dataPoints", {
        prospectName: DataTypes.STRING,
        planSelect: DataTypes.STRING,
        totalUsers: DataTypes.INTEGER,
        costPerEmployee: DataTypes.INTEGER,
        dataCollection: DataTypes.STRING,
        dataProcessing: DataTypes.STRING,
        dataSecurity: DataTypes.STRING,
        emailVolume: DataTypes.STRING,
        ROI: DataTypes.INTEGER,
        savingsPerUser: DataTypes.INTEGER

    });
    return DataPoints;
};