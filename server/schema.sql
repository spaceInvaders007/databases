CREATE DATABASE IF NOT EXISTS chat ;

USE chat;


CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  id_Users int NOT NULL,
  text varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
   id int NOT NULL AUTO_INCREMENT,
   username VARCHAR(30) NOT NULL,
   PRIMARY KEY (ID)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

