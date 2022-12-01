-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Vehiculo'
-- Tabla principal, vehiculos
-- ---
CREATE DATABASE prooOfCarDB;
USE prooOfCarDB;

DROP TABLE IF EXISTS `Vehiculo`;
		
CREATE TABLE `Vehiculo` (
  `NoSerie` VARCHAR(32) NOT NULL DEFAULT 'aaaaaaaaaaaaaa',
  `brand` VARCHAR(20) NOT NULL DEFAULT 'sinMARCA',
  `year` VARCHAR(4) NOT NULL DEFAULT '2000',
  `Model` VARCHAR(20) NOT NULL DEFAULT 'brand',
  `type` INTEGER NULL DEFAULT NULL,
  `Color` VARCHAR(20) NOT NULL DEFAULT 'black',
  `motor_type` VARCHAR(10) NOT NULL DEFAULT '4 cil',
  `fuel_capacity` DECIMAL NOT NULL DEFAULT 2.2,
  `idInsurance` INTEGER NOT NULL DEFAULT 1,
  `IdOwner_Owner` INTEGER NOT NULL DEFAULT 1,
  `idLicence_Licence` INTEGER NOT NULL DEFAULT 1,
  `idService_Service` INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (`NoSerie`)
);

-- ---
-- Table 'Owner'
-- 
-- ---

DROP TABLE IF EXISTS `Owner`;
		
CREATE TABLE `Owner` (
  `IdOwner` INTEGER NOT NULL AUTO_INCREMENT,
  `full_name` MEDIUMTEXT NOT NULL,
  `CURP` MEDIUMTEXT NOT NULL,
  `RFC` MEDIUMTEXT NOT NULL,
  `idLicence_Licence` INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (`IdOwner`)
);

-- ---
-- Table 'Licence'
-- 
-- ---

DROP TABLE IF EXISTS `Licence`;
		
CREATE TABLE `Licence` (
  `validity` INTEGER NOT NULL DEFAULT 1,
  `licence_type` MEDIUMTEXT NULL DEFAULT NULL,
  `idLicence` INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (`idLicence`)
);

-- ---
-- Table 'Insurance'
-- 
-- ---

DROP TABLE IF EXISTS `Insurance`;
		
CREATE TABLE `Insurance` (
  `idInsurance` INTEGER NOT NULL AUTO_INCREMENT,
  `Insurance_name` MEDIUMTEXT NOT NULL,
  `phone` VARCHAR(10) NOT NULL DEFAULT '0001112223',
  `companyAddress` MEDIUMTEXT NULL DEFAULT NULL,
  `covered_amount` BIGINT NOT NULL DEFAULT 10000,
  `startDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `endDate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `insuranceType` MEDIUMTEXT NOT NULL,
  `idAccident_car_accident` INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (`idInsurance`)
);

-- ---
-- Table 'Service'
-- 
-- ---

DROP TABLE IF EXISTS `Service`;
		
CREATE TABLE `Service` (
  `idService` INTEGER NOT NULL AUTO_INCREMENT,
  `workShop_name` MEDIUMTEXT NULL DEFAULT NULL,
  `entranceDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `exitDate` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `cost` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`idService`)
);

-- ---
-- Table 'car_accident'
-- ---

DROP TABLE IF EXISTS `car_accident`;
		
CREATE TABLE `car_accident` (
  `idAccident` INTEGER NOT NULL AUTO_IVNCREMENT,
  `idService_Service` INTEGER NOT NULL,
  `accident_description` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idAccident`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Vehiculo` ADD FOREIGN KEY (idInsurance) REFERENCES `Insurance` (`idInsurance`);
ALTER TABLE `Vehiculo` ADD FOREIGN KEY (IdOwner_Owner) REFERENCES `Owner` (`IdOwner`);
ALTER TABLE `Vehiculo` ADD FOREIGN KEY (idService_Service) REFERENCES `Service` (`idService`);
ALTER TABLE `Owner` ADD FOREIGN KEY (idLicence_Licence) REFERENCES `Licence` (`idLicence`);
ALTER TABLE `Insurance` ADD FOREIGN KEY (idAccident_car_accident) REFERENCES `car_accident` (`idAccident`);
ALTER TABLE `car_accident` ADD FOREIGN KEY (idService_Service) REFERENCES `Service` (`idService`);

-- ---
--Table Properties
-- ---

-- ALTER TABLE `Vehiculo` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Owner` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Licence` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Insurance` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Service` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `car_accident` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Vehiculo` (`NoSerie`,`brand`,`year`,`Model`,`type`,`Color`,`motor_type`,`fuel_capacity`,`idInsurance`,`IdOwner_Owner`,`idLicence_Licence`,`idService_Service`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `Owner` (`IdOwner`,`full_name`,`CURP`,`RFC`,`idLicence_Licence`) VALUES
-- ('','','','','');
-- INSERT INTO `Licence` (`validity`,`licence_type`,`idLicence`) VALUES
-- ('','','');
-- INSERT INTO `Insurance` (`idInsurance`,`Insurance_name`,`phone`,`companyAddress`,`covered_amount`,`startDate`,`endDate`,`insuranceType`,`idAccident_car_accident`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Service` (`idService`,`workShop_name`,`entrance`,`exit`,`cost`) VALUES
-- ('','','','','');
-- INSERT INTO `car_accident` (`idAccident`,`idService_Service`,`accident_description`) VALUES
-- ('','','');