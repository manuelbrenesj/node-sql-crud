CREATE DATABASE IF NOT EXISTS crud_db;
USE crud_db;

CREATE TABLE user (
    id INT(9) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    mail VARCHAR(40) NOT NULL,
    phone INT(8),
    PRIMARY KEY(id)
);

SHOW TABLES;
DESCRIBE USER;