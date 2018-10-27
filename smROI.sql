-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS smROI;
-- Creates the "todolist" database --
CREATE DATABASE smROI;

use smROI;

-- CREATE TABLE IF NOT EXISTS TeeTimes (
--     id INT AUTO_INCREMENT,
--     createdAt DATETIME,
--     updatedAt DATETIME,
--     date DATE NOT NULL,
--     time VARCHAR(255) NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     phone VARCHAR(255) NOT NULL,
--     numberGolfers INTEGER(1) NOT NULL,
--     comments VARCHAR(255),
--     cart BOOLEAN NOT NULL,
-- 	PRIMARY KEY (id)
-- );

select * from dataPoints;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
