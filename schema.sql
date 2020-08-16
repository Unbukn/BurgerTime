### Schema

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured boolean default false,
	PRIMARY KEY (id)
);

-- test data if needed
INSERT INTO  burgers(name) VALUE ("Double Bacon Cheeseburger");
INSERT INTO  burgers(name) VALUE ("Cheeseburger Plain");
INSERT INTO  burgers(name, devoured) VALUE ("Good-Burger", 1);