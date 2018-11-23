-- Drops the smROI if it exists currently --
DROP DATABASE IF EXISTS smROI;
-- Creates the "smROI" database --
CREATE DATABASE smROI;

use smROI;



select * from dataPoints;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
