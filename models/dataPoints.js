module.exports = function(sequelize, DataTypes) {
    var DataPoints = sequelize.define("dataPoints", {
        data1: DataTypes.INTEGER,
        data2: DataTypes.INTEGER,
        data3: DataTypes.INTEGER,
        data4: DataTypes.INTEGER,
        data5: DataTypes.INTEGER,
        data6: DataTypes.INTEGER,
        data7: DataTypes.INTEGER,
        data8: DataTypes.INTEGER,
        data9: DataTypes.INTEGER

    });
    return DataPoints;
}