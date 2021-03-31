-- create database Onepoint;
use Onepoint;
drop table if exists client;
drop table if exists contrat;
drop table if exists ressource;
drop table if exists rapportActivité;
set sql_safe_updates=0;	

CREATE TABLE Onepoint.`user` (
id_user INT auto_increment ,
pub_key varchar(64),
pwd VARCHAR(64),
rôle VARCHAR(15),
nom VARCHAR(15),
email VARCHAR(25), -- check if @ appartient
primary key(id_user));

CREATE TABLE Onepoint.`contrat` (
id_Contrat varchar(64), 
mission VARCHAR(256) NOT NULL,
datecommencement varchar(32),
datefin varchar(32),
descriptif varchar(500),
primary key(id_Contrat));