-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-01-2024 a las 19:01:35
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mapa_tepuy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_administrativo`
--

DROP TABLE IF EXISTS `estadi_administrativo`;
CREATE TABLE IF NOT EXISTS `estadi_administrativo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estadi_id_admin` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `estadi_cargo_admin` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_discapacidad`
--

DROP TABLE IF EXISTS `estadi_discapacidad`;
CREATE TABLE IF NOT EXISTS `estadi_discapacidad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_discapd` varchar(50) NOT NULL,
  `tipo_discapd` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `estadi_discapacidad`
--

INSERT INTO `estadi_discapacidad` (`id`, `id_discapd`, `tipo_discapd`) VALUES
(1, 'discapd001', 'Discapacidad Física'),
(2, 'discapd002', 'Discapacidad Visual'),
(3, 'discapd003', 'Discapacidad Auditiva'),
(4, 'discapd004', 'Discapacidad Táctil'),
(5, 'discapd005', 'Discapacidad Cognitiva o Intelectual'),
(6, 'discapd006', 'Discapacidad Psicosocial o de Salud Mental'),
(7, 'discapd007', 'Discapacidad del Habla o del Lenguaje'),
(8, 'discapd008', 'Discapacidad del Aprendizaje'),
(9, 'discapd009', 'Discapacidad Psicomotora'),
(10, 'discapd0010', 'Discapacidad Múltiple o Combinada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_edo`
--

DROP TABLE IF EXISTS `estadi_edo`;
CREATE TABLE IF NOT EXISTS `estadi_edo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estadi_edo` varchar(50) NOT NULL,
  `estadi_uni` varchar(50) NOT NULL,
  `estadi_esdos` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `estadi_edo`
--

INSERT INTO `estadi_edo` (`id`, `estadi_edo`, `estadi_uni`, `estadi_esdos`) VALUES
(1, 'edo0001', 'uni0001', 'Amazonas'),
(2, 'edo0002', 'uni0002', 'Anzoátegui'),
(3, 'edo0003', 'uni0003', 'Aragua'),
(4, 'edo0004', 'uni0004', 'Apure'),
(5, 'edo0005', 'uni0005', 'Barinas'),
(6, 'edo0006', 'uni0006', 'Bolívar'),
(7, 'edo0007', 'uni0007', 'Carabobo'),
(8, 'edo0008', 'uni0008', 'Cojedes'),
(9, 'edo0009', 'uni0009', 'Delta Amacuro'),
(10, 'edo0010', 'uni0010', 'Distrito Capital'),
(11, 'edo0011', 'uni0011', 'Falcón'),
(12, 'edo0012', 'uni0012', 'Guárico'),
(13, 'edo0013', 'uni0013', 'Lara'),
(14, 'edo0014', 'uni0014', 'La Guaira'),
(15, 'edo0015', 'uni0015', 'Nueva Esparta'),
(16, 'edo0016', 'uni0016', 'Mérida'),
(17, 'edo0017', 'uni0017', 'Miranda'),
(18, 'edo0018', 'uni0018', 'Monagas'),
(19, 'edo0019', 'uni0019', 'Portuguesa'),
(20, 'edo0020', 'uni0020', 'Sucre'),
(21, 'edo0021', 'uni0021', 'Trujillo'),
(22, 'edo0022', 'uni0022', 'Táchira'),
(23, 'edo0023', 'uni0023', 'Yaracuy'),
(24, 'edo0024', 'uni0024', 'Zulia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_estudinte`
--

DROP TABLE IF EXISTS `estadi_estudinte`;
CREATE TABLE IF NOT EXISTS `estadi_estudinte` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estadi_id_estud` varchar(50) NOT NULL,
  `estadi_estuds` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_municps_uni`
--

DROP TABLE IF EXISTS `estadi_municps_uni`;
CREATE TABLE IF NOT EXISTS `estadi_municps_uni` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estadi_edo` varchar(50) NOT NULL,
  `estadi_uni` varchar(50) NOT NULL,
  `estadi_muni` varchar(50) NOT NULL,
  `estadi_estd` varchar(50) NOT NULL,
  `estadi_municps` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=336 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `estadi_municps_uni`
--

INSERT INTO `estadi_municps_uni` (`id`, `estadi_edo`, `estadi_uni`, `estadi_muni`, `estadi_estd`, `estadi_municps`) VALUES
(1, 'edo0001', 'uni0001', 'muni0001', 'Amazonas', 'Autonomo Alto Orinoco'),
(2, 'edo0001', 'uni0001', 'muni0002', 'Amazonas', 'Autonomo Atabapo'),
(3, 'edo0001', 'uni0001', 'muni0003', 'Amazonas', 'Autonomo Atures'),
(4, 'edo0001', 'uni0001', 'muni0004', 'Amazonas', 'Autonomo Autana'),
(5, 'edo0001', 'uni0001', 'muni0005', 'Amazonas', 'Autonomo Maroa'),
(6, 'edo0001', 'uni0001', 'muni0006', 'Amazonas', 'Autonomo Manapiare'),
(7, 'edo0001', 'uni0001', 'muni0007', 'Amazonas', 'Autonomo Rio Negro'),
(8, 'edo0002', 'uni0002', 'muni0008', 'Anzoátegui', 'Anaco'),
(9, 'edo0002', 'uni0002', 'muni0009', 'Anzoátegui', 'Aragua'),
(10, 'edo0002', 'uni0002', 'muni0010', 'Anzoátegui', 'Fernando De Pealver'),
(11, 'edo0002', 'uni0002', 'muni0011', 'Anzoátegui', 'Francisco Del Carmen Carvajal'),
(12, 'edo0002', 'uni0002', 'muni0012', 'Anzoátegui', 'Francisco De Miranda'),
(13, 'edo0002', 'uni0002', 'muni0013', 'Anzoátegui', 'Guanta'),
(14, 'edo0002', 'uni0002', 'muni0014', 'Anzoátegui', 'Independencia'),
(15, 'edo0002', 'uni0002', 'muni0015', 'Anzoátegui', 'Juan Antonio Sotillo'),
(16, 'edo0002', 'uni0002', 'muni0016', 'Anzoátegui', 'Juan Manuel Cajigal'),
(17, 'edo0002', 'uni0002', 'muni0017', 'Anzoátegui', 'Jose Gregorio Monagas'),
(18, 'edo0002', 'uni0002', 'muni0018', 'Anzoátegui', 'Libertad'),
(19, 'edo0002', 'uni0002', 'muni0019', 'Anzoátegui', 'Manuel Ezequiel Bruzual'),
(20, 'edo0002', 'uni0002', 'muni0020', 'Anzoátegui', 'Pedro Maria Freites'),
(21, 'edo0002', 'uni0002', 'muni0021', 'Anzoátegui', 'Piritu '),
(22, 'edo0002', 'uni0002', 'muni0022', 'Anzoátegui', 'San Jose De Guanipa'),
(23, 'edo0002', 'uni0002', 'muni0023', 'Anzoátegui', 'San Juan De Capistrano'),
(24, 'edo0002', 'uni0002', 'muni0024', 'Anzoátegui', 'Santa Ana'),
(25, 'edo0002', 'uni0002', 'muni0025', 'Anzoátegui', 'Simon Bolivar'),
(26, 'edo0002', 'uni0002', 'muni0026', 'Anzoátegui', 'Simon Rodriguez'),
(27, 'edo0002', 'uni0002', 'muni0027', 'Anzoátegui', 'Sir Artur Mc Gregor'),
(28, 'edo0002', 'uni0002', 'muni0028', 'Anzoátegui', 'Turistico Diego Bautista Urbaneja'),
(29, 'edo0003', 'uni0003', 'muni0029', 'Aragua', 'Achaguas'),
(30, 'edo0003', 'uni0003', 'muni0030', 'Aragua', 'Biruaca'),
(31, 'edo0003', 'uni0003', 'muni0031', 'Aragua', 'Muoz'),
(32, 'edo0003', 'uni0003', 'muni0032', 'Aragua', 'Paez'),
(33, 'edo0003', 'uni0003', 'muni0033', 'Aragua', 'Pedro Camejo'),
(34, 'edo0003', 'uni0003', 'muni0034', 'Aragua', 'Romulo Gallegos'),
(35, 'edo0003', 'uni0003', 'muni0035', 'Aragua', 'San Fernando'),
(36, 'edo0004', 'uni0004', 'muni0036', 'Apure', 'Bolívar'),
(37, 'edo0004', 'uni0004', 'muni0037', 'Apure', 'Camatagua'),
(38, 'edo0004', 'uni0004', 'muni0038', 'Apure', 'Francisco Linares Alcántara'),
(39, 'edo0004', 'uni0004', 'muni0039', 'Apure', 'Girardot'),
(40, 'edo0004', 'uni0004', 'muni0040', 'Apure', 'José Ángel Lamas'),
(41, 'edo0004', 'uni0004', 'muni0041', 'Apure', 'José Félix Ribas'),
(42, 'edo0004', 'uni0004', 'muni0042', 'Apure', 'José Rafael Revenga'),
(43, 'edo0004', 'uni0004', 'muni0043', 'Apure', 'Libertador'),
(44, 'edo0004', 'uni0004', 'muni0044', 'Apure', 'Mario Briceño Iragorry'),
(45, 'edo0004', 'uni0004', 'muni0045', 'Apure', 'Ocumare de la Costa de Oro'),
(46, 'edo0004', 'uni0004', 'muni0046', 'Apure', 'San Casimiro'),
(47, 'edo0004', 'uni0004', 'muni0047', 'Apure', 'San Sebastián'),
(48, 'edo0004', 'uni0004', 'muni0048', 'Apure', 'Santiago Mariño'),
(49, 'edo0004', 'uni0004', 'muni0049', 'Apure', 'Santos Michelena'),
(50, 'edo0004', 'uni0004', 'muni0050', 'Apure', 'Sucre'),
(51, 'edo0004', 'uni0004', 'muni0051', 'Apure', 'Tovar'),
(52, 'edo0004', 'uni0004', 'muni0052', 'Apure', 'Urdaneta'),
(53, 'edo0004', 'uni0004', 'muni0053', 'Apure', 'Zamora'),
(54, 'edo0005', 'uni0005', 'muni0054', 'Barinas', 'Alberto Arvelo Torrealba'),
(55, 'edo0005', 'uni0005', 'muni0055', 'Barinas', 'Andrés Eloy Blanco'),
(56, 'edo0005', 'uni0005', 'muni0056', 'Barinas', 'Antonio José de Sucre'),
(57, 'edo0005', 'uni0005', 'muni0057', 'Barinas', 'Arismendi'),
(58, 'edo0005', 'uni0005', 'muni0058', 'Barinas', 'Barinas'),
(59, 'edo0005', 'uni0005', 'muni0059', 'Barinas', 'Bolívar'),
(60, 'edo0005', 'uni0005', 'muni0060', 'Barinas', 'Cruz Paredes'),
(61, 'edo0005', 'uni0005', 'muni0061', 'Barinas', 'Ezequiel Zamora'),
(62, 'edo0005', 'uni0005', 'muni0062', 'Barinas', 'Obispos'),
(63, 'edo0005', 'uni0005', 'muni0063', 'Barinas', 'Pedraza'),
(64, 'edo0005', 'uni0005', 'muni0064', 'Barinas', 'Rojas'),
(65, 'edo0005', 'uni0005', 'muni0065', 'Barinas', 'Sosa'),
(66, 'edo0006', 'uni0006', 'muni0066', 'Bolívar', 'Caroní'),
(67, 'edo0006', 'uni0006', 'muni0067', 'Bolívar', 'Cedeño'),
(68, 'edo0006', 'uni0006', 'muni0068', 'Bolívar', 'El Callao'),
(69, 'edo0006', 'uni0006', 'muni0069', 'Bolívar', 'Gran Sabana'),
(70, 'edo0006', 'uni0006', 'muni0070', 'Bolívar', 'Heres'),
(71, 'edo0006', 'uni0006', 'muni0071', 'Bolívar', 'Piar'),
(72, 'edo0006', 'uni0006', 'muni0072', 'Bolívar', 'Padre Pedro Chien'),
(73, 'edo0006', 'uni0006', 'muni0073', 'Bolívar', 'Raúl Leoni'),
(74, 'edo0006', 'uni0006', 'muni0074', 'Bolívar', 'Roscio'),
(75, 'edo0006', 'uni0006', 'muni0075', 'Bolívar', 'Sifontes'),
(76, 'edo0006', 'uni0006', 'muni0076', 'Bolívar', 'Sucre'),
(77, 'edo0007', 'uni0007', 'muni0077', 'Carabobo', 'Bejuma'),
(78, 'edo0007', 'uni0007', 'muni0078', 'Carabobo', 'Carlos Arvelo'),
(79, 'edo0007', 'uni0007', 'muni0079', 'Carabobo', 'Diego Ibarra'),
(80, 'edo0007', 'uni0007', 'muni0080', 'Carabobo', 'Guacara'),
(81, 'edo0007', 'uni0007', 'muni0081', 'Carabobo', 'Juan José Mora'),
(82, 'edo0007', 'uni0007', 'muni0082', 'Carabobo', 'Libertador'),
(83, 'edo0007', 'uni0007', 'muni0083', 'Carabobo', 'Los Guayos'),
(84, 'edo0007', 'uni0007', 'muni0084', 'Carabobo', 'Miranda'),
(85, 'edo0007', 'uni0007', 'muni0085', 'Carabobo', 'Montalbán'),
(86, 'edo0007', 'uni0007', 'muni0086', 'Carabobo', 'Naguanagua'),
(87, 'edo0007', 'uni0007', 'muni0087', 'Carabobo', 'Puerto Cabello'),
(88, 'edo0007', 'uni0007', 'muni0088', 'Carabobo', 'San Diego'),
(89, 'edo0007', 'uni0007', 'muni0089', 'Carabobo', 'San Joaquín'),
(90, 'edo0007', 'uni0007', 'muni0090', 'Carabobo', 'Valencia'),
(91, 'edo0008', 'uni0008', 'muni0091', 'Cojedes', 'Anzoátegui'),
(92, 'edo0008', 'uni0008', 'muni0092', 'Cojedes', 'Falcón'),
(93, 'edo0008', 'uni0008', 'muni0093', 'Cojedes', 'Girardot'),
(94, 'edo0008', 'uni0008', 'muni0094', 'Cojedes', 'Lima Blanco'),
(95, 'edo0008', 'uni0008', 'muni0095', 'Cojedes', 'Pao de San Juan Bautista'),
(96, 'edo0008', 'uni0008', 'muni0096', 'Cojedes', 'Ricaurte'),
(97, 'edo0008', 'uni0008', 'muni0097', 'Cojedes', 'Rómulo Gallegos'),
(98, 'edo0008', 'uni0008', 'muni0098', 'Cojedes', 'San Carlos'),
(99, 'edo0008', 'uni0008', 'muni0099', 'Cojedes', 'Tinaco'),
(100, 'edo0009', 'uni0009', 'muni0100', 'Delta Amacuro', 'Antonio Diaz’'),
(101, 'edo0009', 'uni0009', 'muni0101', 'Delta Amacuro', 'Casacoima'),
(102, 'edo0009', 'uni0009', 'muni0102', 'Delta Amacuro', 'Pedernales'),
(103, 'edo0009', 'uni0009', 'muni0103', 'Delta Amacuro', 'Tucupita'),
(104, 'edo0010', 'uni0010', 'muni0104', 'Distrito Capital', 'Libertador'),
(105, 'edo0011', 'uni0011', 'muni0105', 'Falcón', 'Acosta'),
(106, 'edo0011', 'uni0011', 'muni0106', 'Falcón', 'Bolívar'),
(107, 'edo0011', 'uni0011', 'muni0107', 'Falcón', 'Buchivacoa'),
(108, 'edo0011', 'uni0011', 'muni0108', 'Falcón', 'Cacique Manaure'),
(109, 'edo0011', 'uni0011', 'muni0109', 'Falcón', 'Carirubana'),
(110, 'edo0011', 'uni0011', 'muni0110', 'Falcón', 'Colina'),
(111, 'edo0011', 'uni0011', 'muni0111', 'Falcón', 'Dabajuro'),
(112, 'edo0011', 'uni0011', 'muni0112', 'Falcón', 'Democracia'),
(113, 'edo0011', 'uni0011', 'muni0113', 'Falcón', 'Falcón'),
(114, 'edo0011', 'uni0011', 'muni0114', 'Falcón', 'Federación'),
(115, 'edo0011', 'uni0011', 'muni0115', 'Falcón', 'Jacura'),
(116, 'edo0011', 'uni0011', 'muni0116', 'Falcón', 'Los Taques'),
(117, 'edo0011', 'uni0011', 'muni0117', 'Falcón', 'Mauroa'),
(118, 'edo0011', 'uni0011', 'muni0118', 'Falcón', 'Miranda'),
(119, 'edo0011', 'uni0011', 'muni0119', 'Falcón', 'Monseñor Iturriza'),
(120, 'edo0011', 'uni0011', 'muni0120', 'Falcón', 'Palmasola'),
(121, 'edo0011', 'uni0011', 'muni0121', 'Falcón', 'Petit'),
(122, 'edo0011', 'uni0011', 'muni0122', 'Falcón', 'Píritu'),
(123, 'edo0011', 'uni0011', 'muni0123', 'Falcón', 'San Francisco'),
(124, 'edo0011', 'uni0011', 'muni0124', 'Falcón', 'Silva'),
(125, 'edo0011', 'uni0011', 'muni0125', 'Falcón', 'Sucre'),
(126, 'edo0011', 'uni0011', 'muni0126', 'Falcón', 'Tocópero'),
(127, 'edo0011', 'uni0011', 'muni0127', 'Falcón', 'Unión'),
(128, 'edo0011', 'uni0011', 'muni0128', 'Falcón', 'Urumaco'),
(129, 'edo0011', 'uni0011', 'muni0129', 'Falcón', 'Zamora'),
(130, 'edo0012', 'uni0012', 'muni0130', 'Guárico', 'Camaguán'),
(131, 'edo0012', 'uni0012', 'muni0131', 'Guárico', 'Chaguaramas'),
(132, 'edo0012', 'uni0012', 'muni0132', 'Guárico', 'El Socorro'),
(133, 'edo0012', 'uni0012', 'muni0133', 'Guárico', 'San Geronimo De Guayabal'),
(134, 'edo0012', 'uni0012', 'muni0134', 'Guárico', 'Leonardo Infante'),
(135, 'edo0012', 'uni0012', 'muni0135', 'Guárico', 'Las Mercedes'),
(136, 'edo0012', 'uni0012', 'muni0136', 'Guárico', 'Julian Mellado'),
(137, 'edo0012', 'uni0012', 'muni0137', 'Guárico', 'Francisco De Miranda'),
(138, 'edo0012', 'uni0012', 'muni0138', 'Guárico', 'Jose Tadeo Monagas'),
(139, 'edo0012', 'uni0012', 'muni0139', 'Guárico', 'Ortiz'),
(140, 'edo0012', 'uni0012', 'muni0140', 'Guárico', 'Jose Felix Rivas'),
(141, 'edo0012', 'uni0012', 'muni0141', 'Guárico', 'Juan German Roscio'),
(142, 'edo0012', 'uni0012', 'muni0142', 'Guárico', 'San Jose De Guaribe'),
(143, 'edo0012', 'uni0012', 'muni0143', 'Guárico', 'Santa Maria De Ipire'),
(144, 'edo0012', 'uni0012', 'muni0144', 'Guárico', 'Zaraza'),
(145, 'edo0013', 'uni0013', 'muni0145', 'Lara', 'Andrés Eloy Blanco'),
(146, 'edo0013', 'uni0013', 'muni0146', 'Lara', 'Crespo'),
(147, 'edo0013', 'uni0013', 'muni0147', 'Lara', 'Iribarren'),
(148, 'edo0013', 'uni0013', 'muni0148', 'Lara', 'Jiménez'),
(149, 'edo0013', 'uni0013', 'muni0149', 'Lara', 'Morán'),
(150, 'edo0013', 'uni0013', 'muni0150', 'Lara', 'Palavecino'),
(151, 'edo0013', 'uni0013', 'muni0151', 'Lara', 'Simón Planas'),
(152, 'edo0013', 'uni0013', 'muni0152', 'Lara', 'Torres'),
(153, 'edo0013', 'uni0013', 'muni0153', 'Lara', 'Urdaneta'),
(154, 'edo0014', 'uni0014', 'muni0154', 'La Guaira', 'Vargas'),
(155, 'edo0015', 'uni0015', 'muni0155', 'Nueva Esparta', 'Antolin Del Campo'),
(156, 'edo0015', 'uni0015', 'muni0156', 'Nueva Esparta', 'Arismendi'),
(157, 'edo0015', 'uni0015', 'muni0157', 'Nueva Esparta', 'Diaz'),
(158, 'edo0015', 'uni0015', 'muni0158', 'Nueva Esparta', 'Garcia'),
(159, 'edo0015', 'uni0015', 'muni0159', 'Nueva Esparta', 'Gomez'),
(160, 'edo0015', 'uni0015', 'muni0160', 'Nueva Esparta', 'Maneiro'),
(161, 'edo0015', 'uni0015', 'muni0161', 'Nueva Esparta', 'Marcano'),
(162, 'edo0015', 'uni0015', 'muni0162', 'Nueva Esparta', 'Mario'),
(163, 'edo0015', 'uni0015', 'muni0163', 'Nueva Esparta', 'Peninsula De Macanao'),
(164, 'edo0015', 'uni0015', 'muni0164', 'Nueva Esparta', 'Tubores'),
(165, 'edo0015', 'uni0015', 'muni0165', 'Nueva Esparta', 'Villalba'),
(166, 'edo0016', 'uni0016', 'muni0166', 'Mérida', 'Alberto Adriani'),
(167, 'edo0016', 'uni0016', 'muni0167', 'Mérida', 'Andres Bello'),
(168, 'edo0016', 'uni0016', 'muni0168', 'Mérida', 'Antonio Pinto Salinas'),
(169, 'edo0016', 'uni0016', 'muni0169', 'Mérida', 'Aricagua'),
(170, 'edo0016', 'uni0016', 'muni0170', 'Mérida', 'Arzobispo Chacon'),
(171, 'edo0016', 'uni0016', 'muni0171', 'Mérida', 'Campo Elias'),
(172, 'edo0016', 'uni0016', 'muni0172', 'Mérida', 'Caracciolo Parra Olmedo'),
(173, 'edo0016', 'uni0016', 'muni0173', 'Mérida', 'Cardenal Quintero'),
(174, 'edo0016', 'uni0016', 'muni0174', 'Mérida', 'Guaraque'),
(175, 'edo0016', 'uni0016', 'muni0175', 'Mérida', 'Julio Cesar Salas'),
(176, 'edo0016', 'uni0016', 'muni0176', 'Mérida', 'Justo Briceo'),
(177, 'edo0016', 'uni0016', 'muni0177', 'Mérida', 'Libertador'),
(178, 'edo0016', 'uni0016', 'muni0178', 'Mérida', 'Miranda'),
(179, 'edo0016', 'uni0016', 'muni0179', 'Mérida', 'Obispo Ramos De Lora'),
(180, 'edo0016', 'uni0016', 'muni0180', 'Mérida', 'Padre Noguera'),
(181, 'edo0016', 'uni0016', 'muni0181', 'Mérida', 'Pueblo Llano'),
(182, 'edo0016', 'uni0016', 'muni0182', 'Mérida', 'Rangel'),
(183, 'edo0016', 'uni0016', 'muni0183', 'Mérida', 'Rivas Davila'),
(184, 'edo0016', 'uni0016', 'muni0184', 'Mérida', 'Santos Marquina'),
(185, 'edo0016', 'uni0016', 'muni0185', 'Mérida', 'Santos Marquina'),
(186, 'edo0016', 'uni0016', 'muni0186', 'Mérida', 'Sucre'),
(187, 'edo0016', 'uni0016', 'muni0187', 'Mérida', 'Tovar'),
(188, 'edo0016', 'uni0016', 'muni0188', 'Mérida', 'Tulio Febres Cordero'),
(189, 'edo0016', 'uni0016', 'muni0189', 'Mérida', 'Zea'),
(190, 'edo0017', 'uni0017', 'muni0190', 'Miranda', 'Acevedo'),
(191, 'edo0017', 'uni0017', 'muni0191', 'Miranda', 'Andres Bello'),
(192, 'edo0017', 'uni0017', 'muni0192', 'Miranda', 'Baruta'),
(193, 'edo0017', 'uni0017', 'muni0193', 'Miranda', 'Brion'),
(194, 'edo0017', 'uni0017', 'muni0194', 'Miranda', 'Buroz'),
(195, 'edo0017', 'uni0017', 'muni0195', 'Miranda', 'Carrizal'),
(196, 'edo0017', 'uni0017', 'muni0196', 'Miranda', 'Chacao'),
(197, 'edo0017', 'uni0017', 'muni0197', 'Miranda', 'Cristobal Rojas'),
(198, 'edo0017', 'uni0017', 'muni0198', 'Miranda', 'El Hatillo'),
(199, 'edo0017', 'uni0017', 'muni0199', 'Miranda', 'Guaicaipuro'),
(200, 'edo0017', 'uni0017', 'muni0200', 'Miranda', 'Independencia'),
(201, 'edo0017', 'uni0017', 'muni0201', 'Miranda', 'Lander'),
(202, 'edo0017', 'uni0017', 'muni0202', 'Miranda', 'Los Salias'),
(203, 'edo0017', 'uni0017', 'muni0203', 'Miranda', 'Paez'),
(204, 'edo0017', 'uni0017', 'muni0204', 'Miranda', 'Paz Castillo'),
(205, 'edo0017', 'uni0017', 'muni0205', 'Miranda', 'Pedro Gual'),
(206, 'edo0017', 'uni0017', 'muni0206', 'Miranda', 'Plaza'),
(207, 'edo0017', 'uni0017', 'muni0207', 'Miranda', 'Simon Bolivar'),
(208, 'edo0017', 'uni0017', 'muni0208', 'Miranda', 'Sucre'),
(209, 'edo0017', 'uni0017', 'muni0209', 'Miranda', 'Urdaneta'),
(210, 'edo0017', 'uni0017', 'muni0210', 'Miranda', 'Zamora'),
(211, 'edo0018', 'uni0018', 'muni0211', 'Monagas', 'Acosta'),
(212, 'edo0018', 'uni0018', 'muni0212', 'Monagas', 'Aguasay'),
(213, 'edo0018', 'uni0018', 'muni0213', 'Monagas', 'Bolivar'),
(214, 'edo0018', 'uni0018', 'muni0214', 'Monagas', 'Caripe'),
(215, 'edo0018', 'uni0018', 'muni0215', 'Monagas', 'Cedeo'),
(216, 'edo0018', 'uni0018', 'muni0216', 'Monagas', 'Ezequiel Zamora'),
(217, 'edo0018', 'uni0018', 'muni0217', 'Monagas', 'Libertador'),
(218, 'edo0018', 'uni0018', 'muni0218', 'Monagas', 'Maturin'),
(219, 'edo0018', 'uni0018', 'muni0219', 'Monagas', 'Piar'),
(220, 'edo0018', 'uni0018', 'muni0220', 'Monagas', 'Punceres'),
(221, 'edo0018', 'uni0018', 'muni0221', 'Monagas', 'Santa Barbara'),
(222, 'edo0018', 'uni0018', 'muni0222', 'Monagas', 'Sotillo'),
(223, 'edo0018', 'uni0018', 'muni0223', 'Monagas', 'Uracoa'),
(224, 'edo0019', 'uni0019', 'muni0224', 'Portuguesa', 'Agua Blanca'),
(225, 'edo0019', 'uni0019', 'muni0225', 'Portuguesa', 'Araure'),
(226, 'edo0019', 'uni0019', 'muni0226', 'Portuguesa', 'Esteller'),
(227, 'edo0019', 'uni0019', 'muni0227', 'Portuguesa', 'Guanare'),
(228, 'edo0019', 'uni0019', 'muni0228', 'Portuguesa', 'Guanarito'),
(229, 'edo0019', 'uni0019', 'muni0229', 'Portuguesa', 'Monseor Jose Vicente De Unda'),
(230, 'edo0019', 'uni0019', 'muni0230', 'Portuguesa', 'Ospino'),
(231, 'edo0019', 'uni0019', 'muni0231', 'Portuguesa', 'Paez'),
(232, 'edo0019', 'uni0019', 'muni0232', 'Portuguesa', 'Papelon'),
(233, 'edo0019', 'uni0019', 'muni0233', 'Portuguesa', 'San Genaro De Boconoito'),
(234, 'edo0019', 'uni0019', 'muni0234', 'Portuguesa', 'San Rafael De Onoto'),
(235, 'edo0019', 'uni0019', 'muni0235', 'Portuguesa', 'Santa Rosalia'),
(236, 'edo0019', 'uni0019', 'muni0236', 'Portuguesa', 'Sucre'),
(237, 'edo0019', 'uni0019', 'muni0237', 'Portuguesa', 'Turen'),
(238, 'edo0020', 'uni0020', 'muni0238', 'Sucre', 'Andres Eloy Blanco'),
(239, 'edo0020', 'uni0020', 'muni0239', 'Sucre', 'Andres Mata'),
(240, 'edo0020', 'uni0020', 'muni0240', 'Sucre', 'Arismendi'),
(241, 'edo0020', 'uni0020', 'muni0241', 'Sucre', 'Benitez'),
(242, 'edo0020', 'uni0020', 'muni0242', 'Sucre', 'Bermudez'),
(243, 'edo0020', 'uni0020', 'muni0243', 'Sucre', 'Bolivar'),
(244, 'edo0020', 'uni0020', 'muni0244', 'Sucre', 'Cajigal'),
(245, 'edo0020', 'uni0020', 'muni0245', 'Sucre', 'Cruz Salmeron Acosta'),
(246, 'edo0020', 'uni0020', 'muni0246', 'Sucre', 'Libertador'),
(247, 'edo0020', 'uni0020', 'muni0247', 'Sucre', 'Mario'),
(248, 'edo0020', 'uni0020', 'muni0248', 'Sucre', 'Mejia'),
(249, 'edo0020', 'uni0020', 'muni0249', 'Sucre', 'Montes'),
(250, 'edo0020', 'uni0020', 'muni0250', 'Sucre', 'Ribero'),
(251, 'edo0020', 'uni0020', 'muni0251', 'Sucre', 'Sucre'),
(252, 'edo0021', 'uni0021', 'muni0252', 'Trujillo', 'Andres Bello'),
(253, 'edo0021', 'uni0021', 'muni0253', 'Trujillo', 'Bocono'),
(254, 'edo0021', 'uni0021', 'muni0254', 'Trujillo', 'Bolivar'),
(255, 'edo0021', 'uni0021', 'muni0255', 'Trujillo', 'Candelaria'),
(256, 'edo0021', 'uni0021', 'muni0256', 'Trujillo', 'Carache'),
(257, 'edo0021', 'uni0021', 'muni0257', 'Trujillo', 'Escuque'),
(258, 'edo0021', 'uni0021', 'muni0258', 'Trujillo', 'Jose Felipe Marquez Caizales'),
(259, 'edo0021', 'uni0021', 'muni0259', 'Trujillo', 'Juan Vicente Campo Elias'),
(260, 'edo0021', 'uni0021', 'muni0260', 'Trujillo', 'La Ceiba'),
(261, 'edo0021', 'uni0021', 'muni0261', 'Trujillo', 'Miranda'),
(262, 'edo0021', 'uni0021', 'muni0262', 'Trujillo', 'Monte Carmelo'),
(263, 'edo0021', 'uni0021', 'muni0263', 'Trujillo', 'Motatan'),
(264, 'edo0021', 'uni0021', 'muni0264', 'Trujillo', 'Pampan'),
(265, 'edo0021', 'uni0021', 'muni0265', 'Trujillo', 'Pampanito'),
(266, 'edo0021', 'uni0021', 'muni0266', 'Trujillo', 'Rafael Rangel'),
(267, 'edo0021', 'uni0021', 'muni0267', 'Trujillo', 'San Rafael De Carvajal'),
(268, 'edo0021', 'uni0021', 'muni0268', 'Trujillo', 'Sucre'),
(269, 'edo0021', 'uni0021', 'muni0269', 'Trujillo', 'Trujillo'),
(270, 'edo0021', 'uni0021', 'muni0270', 'Trujillo', 'Urdaneta'),
(271, 'edo0021', 'uni0021', 'muni0271', 'Trujillo', 'Valera'),
(272, 'edo0022', 'uni0022', 'muni0272', 'Táchira', 'Andres Bello'),
(273, 'edo0022', 'uni0022', 'muni0273', 'Táchira', 'Antonio Romulo Costa'),
(274, 'edo0022', 'uni0022', 'muni0274', 'Táchira', 'Ayacucho'),
(275, 'edo0022', 'uni0022', 'muni0275', 'Táchira', 'Bolivar'),
(276, 'edo0022', 'uni0022', 'muni0276', 'Táchira', 'Cardenas'),
(277, 'edo0022', 'uni0022', 'muni0277', 'Táchira', 'Cordoba'),
(278, 'edo0022', 'uni0022', 'muni0278', 'Táchira', 'Fernandez Feo'),
(279, 'edo0022', 'uni0022', 'muni0279', 'Táchira', 'Francisco De Miranda'),
(280, 'edo0022', 'uni0022', 'muni0280', 'Táchira', 'Garcia De Hevia'),
(281, 'edo0022', 'uni0022', 'muni0281', 'Táchira', 'Guasimos'),
(282, 'edo0022', 'uni0022', 'muni0282', 'Táchira', 'Independencia'),
(283, 'edo0022', 'uni0022', 'muni0283', 'Táchira', 'Jauregui'),
(284, 'edo0022', 'uni0022', 'muni0284', 'Táchira', 'Jose Maria Vargas'),
(285, 'edo0022', 'uni0022', 'muni0285', 'Táchira', 'Junin'),
(286, 'edo0022', 'uni0022', 'muni0286', 'Táchira', 'Libertad'),
(287, 'edo0022', 'uni0022', 'muni0287', 'Táchira', 'Libertador'),
(288, 'edo0022', 'uni0022', 'muni0288', 'Táchira', 'Lobatera'),
(289, 'edo0022', 'uni0022', 'muni0289', 'Táchira', 'Michelena'),
(290, 'edo0022', 'uni0022', 'muni0290', 'Táchira', 'Panamericano'),
(291, 'edo0022', 'uni0022', 'muni0291', 'Táchira', 'Pedro Maria Urea'),
(292, 'edo0022', 'uni0022', 'muni0292', 'Táchira', 'Rafael Urdaneta'),
(293, 'edo0022', 'uni0022', 'muni0293', 'Táchira', 'Samuel Dario Maldonado'),
(294, 'edo0022', 'uni0022', 'muni0294', 'Táchira', 'San Cristobal'),
(295, 'edo0022', 'uni0022', 'muni0295', 'Táchira', 'Seboruco'),
(296, 'edo0022', 'uni0022', 'muni0296', 'Táchira', 'Simon Rodriguez'),
(297, 'edo0022', 'uni0022', 'muni0297', 'Táchira', 'Sucre'),
(298, 'edo0022', 'uni0022', 'muni0298', 'Táchira', 'Torbes'),
(299, 'edo0022', 'uni0022', 'muni0299', 'Táchira', 'Uribante'),
(300, 'edo0022', 'uni0022', 'muni0300', 'Táchira', 'San Judas Tadeo'),
(301, 'edo0023', 'uni0023', 'muni0301', 'Yaracuy', 'Aristides Bastidas'),
(302, 'edo0023', 'uni0023', 'muni0302', 'Yaracuy', 'Bolivar'),
(303, 'edo0023', 'uni0023', 'muni0303', 'Yaracuy', 'Bruzual'),
(304, 'edo0023', 'uni0023', 'muni0304', 'Yaracuy', 'Cocorote'),
(305, 'edo0023', 'uni0023', 'muni0305', 'Yaracuy', 'Independencia'),
(306, 'edo0023', 'uni0023', 'muni0306', 'Yaracuy', 'Jose Antonio Paez'),
(307, 'edo0023', 'uni0023', 'muni0307', 'Yaracuy', 'La Trinidad'),
(308, 'edo0023', 'uni0023', 'muni0308', 'Yaracuy', 'Manuel Monge'),
(309, 'edo0023', 'uni0023', 'muni0309', 'Yaracuy', 'Nirgua'),
(310, 'edo0023', 'uni0023', 'muni0310', 'Yaracuy', 'Pea'),
(311, 'edo0023', 'uni0023', 'muni0311', 'Yaracuy', 'San Felipe'),
(312, 'edo0023', 'uni0023', 'muni0312', 'Yaracuy', 'Sucre'),
(313, 'edo0023', 'uni0023', 'muni0313', 'Yaracuy', 'Urachiche'),
(314, 'edo0023', 'uni0023', 'muni0314', 'Yaracuy', 'Veroes'),
(315, 'edo0024', 'uni0024', 'muni0315', 'Zulia', 'Almirante Padilla'),
(316, 'edo0024', 'uni0024', 'muni0316', 'Zulia', 'Baralt'),
(317, 'edo0024', 'uni0024', 'muni0317', 'Zulia', 'Cabimas'),
(318, 'edo0024', 'uni0024', 'muni0318', 'Zulia', 'Catatumbo'),
(319, 'edo0024', 'uni0024', 'muni0319', 'Zulia', 'Colon'),
(320, 'edo0024', 'uni0024', 'muni0320', 'Zulia', 'Francisco Javier Pulgar'),
(321, 'edo0024', 'uni0024', 'muni0321', 'Zulia', 'Jesus Enrique Lossada'),
(322, 'edo0024', 'uni0024', 'muni0322', 'Zulia', 'Jesus Maria Semprum'),
(323, 'edo0024', 'uni0024', 'muni0323', 'Zulia', 'La Cañada De Urdaneta'),
(324, 'edo0024', 'uni0024', 'muni0324', 'Zulia', 'Lagunillas'),
(325, 'edo0024', 'uni0024', 'muni0325', 'Zulia', 'Machiques De Perija'),
(326, 'edo0024', 'uni0024', 'muni0326', 'Zulia', 'Mara'),
(327, 'edo0024', 'uni0024', 'muni0327', 'Zulia', 'Maracaibo'),
(328, 'edo0024', 'uni0024', 'muni0328', 'Zulia', 'Miranda'),
(329, 'edo0024', 'uni0024', 'muni0329', 'Zulia', 'Paez'),
(330, 'edo0024', 'uni0024', 'muni0330', 'Zulia', 'Rosario De Perija'),
(331, 'edo0024', 'uni0024', 'muni0331', 'Zulia', 'San Francisco'),
(332, 'edo0024', 'uni0024', 'muni0332', 'Zulia', 'Santa Rita'),
(333, 'edo0024', 'uni0024', 'muni0333', 'Zulia', 'Simon Bolivar'),
(334, 'edo0024', 'uni0024', 'muni0334', 'Zulia', 'Sucre'),
(335, 'edo0024', 'uni0024', 'muni0335', 'Zulia', 'Valmore Rodriguez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_obrero`
--

DROP TABLE IF EXISTS `estadi_obrero`;
CREATE TABLE IF NOT EXISTS `estadi_obrero` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estadi_id_obrero` varchar(50) NOT NULL,
  `estadi_cargo_obrero` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_profesores`
--

DROP TABLE IF EXISTS `estadi_profesores`;
CREATE TABLE IF NOT EXISTS `estadi_profesores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estadi_profesr` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `estadi_condicion` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_sexo`
--

DROP TABLE IF EXISTS `estadi_sexo`;
CREATE TABLE IF NOT EXISTS `estadi_sexo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_tipo_sexo` varchar(50) NOT NULL,
  `estadi_tipo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `estadi_sexo`
--

INSERT INTO `estadi_sexo` (`id`, `id_tipo_sexo`, `estadi_tipo`) VALUES
(1, 'sex0001', 'Femenino'),
(2, 'sex0002', 'Masculino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_tipo_personal`
--

DROP TABLE IF EXISTS `estadi_tipo_personal`;
CREATE TABLE IF NOT EXISTS `estadi_tipo_personal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code_persnl` varchar(50) NOT NULL,
  `tipo_personal` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `estadi_tipo_personal` (`id`, `code_persnl`, `tipo_personal`) VALUES
(1, 'pers001', 'Profersores'),
(2, 'pers002', 'Estudiantes'),
(3, 'pers003', 'Administrativos'),
(4, 'pers004', 'Obreros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadi_tipo_uni`
--

DROP TABLE IF EXISTS `estadi_tipo_uni`;
CREATE TABLE IF NOT EXISTS `estadi_tipo_uni` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_tipo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tipo_uni` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `estadi_tipo_uni`
--

INSERT INTO `estadi_tipo_uni` (`id`, `id_tipo`, `tipo_uni`) VALUES
(1, 'public0001', 'Pública'),
(2, 'privad0002', 'Privada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mapa_edos_uni`
--

DROP TABLE IF EXISTS `mapa_edos_uni`;
CREATE TABLE IF NOT EXISTS `mapa_edos_uni` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mapa_edo` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `mapa_uni` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `mapa_esdos` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mapa_edos_uni`
--

INSERT INTO `mapa_edos_uni` (`id`, `mapa_edo`, `mapa_uni`, `mapa_esdos`) VALUES
(1, 'edo0001', 'uni0001', 'Amazonas'),
(2, 'edo0002', 'uni0002', 'Anzoátegui'),
(3, 'edo0003', 'uni0003', 'Aragua'),
(4, 'edo0004', 'uni0004', 'Apure'),
(5, 'edo0005', 'uni0005', 'Barinas'),
(6, 'edo0006', 'uni0006', 'Bolívar'),
(7, 'edo0007', 'uni0007', 'Carabobo'),
(8, 'edo0008', 'uni0008', 'Cojedes'),
(9, 'edo0009', 'uni0009', 'Delta Amacuro'),
(10, 'edo0010', 'uni0010', 'Distrito Capital'),
(11, 'edo0011', 'uni0011', 'Falcón'),
(12, 'edo0012', 'uni0012', 'Guárico'),
(13, 'edo0013', 'uni0013', 'Lara'),
(14, 'edo0014', 'uni0014', 'La Guaira'),
(15, 'edo0015', 'uni0015', 'Nueva Esparta'),
(16, 'edo0016', 'uni0016', 'Mérida'),
(17, 'edo0017', 'uni0017', 'Miranda'),
(18, 'edo0018', 'uni0018', 'Monagas'),
(19, 'edo0019', 'uni0019', 'Portuguesa'),
(20, 'edo0020', 'uni0020', 'Sucre'),
(21, 'edo0021', 'uni0021', 'Trujillo'),
(22, 'edo0022', 'uni0022', 'Táchira'),
(23, 'edo0023', 'uni0023', 'Yaracuy'),
(24, 'edo0024', 'uni0024', 'Zulia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mapa_nombre_uni`
--

DROP TABLE IF EXISTS `mapa_nombre_uni`;
CREATE TABLE IF NOT EXISTS `mapa_nombre_uni` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mapa_uni` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `mapa_edo` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `mapa_uni_edo` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=70 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mapa_nombre_uni`
--

INSERT INTO `mapa_nombre_uni` (`id`, `mapa_uni`, `mapa_edo`, `mapa_uni_edo`) VALUES
(1, 'uni0001', 'edo0002', '(UNATUR) - Universidad Nacional Del Turismo'),
(2, 'uni0002', 'edo0002', '(UPTJAA) - Universidad Politécnica Territorial José Antonio Anzoátegui'),
(3, 'uni0003', 'edo0003', '(UPTAFBF) - Universidad Politécnica Territorial Del Estado Aragua Federico Brito Figueroa'),
(4, 'uni0004', 'edo0004', ' (UPTALTAP) - Universidad Politécnica Territorial Del Alto Apure Pedro Camejo'),
(5, 'uni0005', 'edo0005', '(UNELLEZ) - Universidad Nacional Experimental De Los Llanos Occidentales Ezequiel Zamora'),
(6, 'uni0006', 'edo0005', ' (UPTBJFR) - Universidad Politécnica Territorial Del Estado Barinas José Félix Ribas'),
(7, 'uni0007', 'edo0006', '(UNEG) - Universidad Nacional Experimental De Guayana'),
(8, 'uni0008', 'edo0006', '(UVH) INTEVEP - Universidad Venezolana De Hidrocarburos'),
(9, 'uni0009', 'edo0006', ' (UNEIT) - Universidad Nacional Experimental Indígena Del Taúca'),
(10, 'uni0010', 'edo0006', ' (UPTB) - Universidad Politécnica Territorial Estado Bolívar'),
(11, 'uni0011', 'edo0006', '(UNEXEE) - Universidad Nacional Experimental De Especialidades Eléctricas'),
(12, 'uni0012', 'edo0007', '(UC) - Universidad Carabobo'),
(13, 'uni0013', 'edo0007', '(UPTPC) - Universidad Politécnica Territorial De Puerto Cabello'),
(14, 'uni0014', 'edo0007', '(UPTV) - Universidad Politécnica Territorial De Valencia'),
(15, 'uni0015', 'edo0008', '(UDS) - Universidad Deportiva Del Sur'),
(16, 'uni0016', 'edo0009', '(UTDFT) - Universidad Territorial Deltaica Francisco Tamayo'),
(17, 'uni0017', 'edo0010', '(UCV) - Universidad Central De Venezuela'),
(18, 'uni0018', 'edo0010', '(UNESR) - Universidad Nacional Experimental Simón Rodríguez'),
(19, 'uni0019', 'edo0010', '(UNA) - Universidad Nacional Abierta'),
(20, 'uni0020', 'edo0010', '(UPEL) - Universidad Pedagógica Experimental Libertador'),
(21, 'uni0021', 'edo0010', '(UNEFA) - Universidad Nacional Experimental Politécnica De La Fuerza Armada Bolivariana '),
(22, 'uni0022', 'edo0010', '(UBV) - Universidad Bolivariana De Venezuela'),
(23, 'uni0023', 'edo0010', '(ULAC) - Universidad Latinoamericana Y Del Caribe'),
(24, 'uni0024', 'edo0010', '(UNEARTES) - Universidad Nacional Experimental De Las Artes'),
(25, 'uni0025', 'edo0010', '(UBTJFR) - Universidad Bolivariana De Los Trabajadores Jesús Rivero'),
(26, 'uni0026', 'edo0010', '(UNES) - Universidad Nacional Experimental De La Seguridad'),
(27, 'uni0027', 'edo0010', '(UMBV) Universidad Militar Bolivariana De Venezuela'),
(28, 'uni0028', 'edo0010', '(UCS) - Universidad De Las Ciencias De La Salud Hugo Chávez Frías'),
(29, 'uni0029', 'edo0010', '(UPAFV) - Universidad Popular Del Ambiente Fruto Vivas'),
(30, 'uni0030', 'edo0010', '(UNEXCA) - Universidad Nacional Experimental De La Gran Caracas'),
(31, 'uni0031', 'edo0010', '(UNETI) - Universidad Nacional De Las Telecomunicaciones e Informática'),
(32, 'uni0032', 'edo0010', '(UNEM) - Universidad Nacional Experimental Del Magisterio Samuel Robinsón'),
(33, 'uni0033', 'edo0010', '(UNETRANS) - Universidad Nacional Experimental De Transporte'),
(34, 'uni0034', 'edo0010', '(UPTCMS) - Universidad Politécnica Territorial De Caracas Mariscal Sucre'),
(35, 'uni0035', 'edo0010', '(UBC) - Universidad Bolivariana De Las Comunas'),
(36, 'uni0036', 'edo0010', '(LAUICOM) - Universidad Internacional De Las Comunicaciones'),
(37, 'uni0037', 'edo0011', '(UNEFM) - Universidad Nacional Experimental Francisco De Miranda'),
(38, 'uni0038', 'edo0011', '(UPTFAG) - Universidad Politécnica Territorial De Falcon Alonso Gamero'),
(39, 'uni0039', 'edo0012', '(UNERG) - Universidad Nacional Experimental Rómulo Gallegos'),
(40, 'uni0040', 'edo0012', '(UPTLL) - Universidad Politécnica Territorial Llanos Juana Ramírez'),
(41, 'uni0041', 'edo0013', '(UCLA) - Universidad Centro Occidental Lisandro Alvarado'),
(42, 'uni0042', 'edo0013', '(UNEXPO) - Universidad Nacional Experimental Politécnica Antonio José De Sucre'),
(43, 'uni0043', 'edo0013', '(UPTLAEB) - Universidad Politécnica Territorial Del Estado Lara Andrés Eloy Blanco'),
(44, 'uni0044', 'edo0013', '(UCVAG) - Universidad Campesina De Venezuela Argimiro Gabaldón'),
(45, 'uni0045', 'edo0013', '(UNELMLK) - Universidad Nacional Experimental De Lara Martín Luther King'),
(46, 'uni0046', 'edo0014', '(UMC) - Universidad Nacional Experimental Marítima Del Caribe'),
(47, 'uni0047', 'edo0016', '(UPTMKR) - Universidad Politécnica Territorial De Mérida Kléber Ramírez'),
(48, 'uni0048', 'edo0016', '(ULA) - Universidad Los Andes'),
(49, 'uni0049', 'edo0017', '(UPTBAL) - Universidad Politécnica Territorial De Barlovento Argelia Laya'),
(50, 'uni0050', 'edo0017', '(UPTAMCA) - Universidad Politécnica Territorial De Los Altos Mirandinos Cecilio Acosta'),
(51, 'uni0051', 'edo0017', '(UPTVT) - Universidad Politécnica Territorial De Los Valles Del Tuy'),
(52, 'uni0052', 'edo0017', '(USB) - Universidad Nacional Experimental Simón Bolívar'),
(53, 'uni0053', 'edo0017', '(IDEA) - Fundación Instituto De Estudios Avanzados'),
(54, 'uni0054', 'edo0018', '(UPTNM) - Universidad Politécnica Territorial Del Norte De Monagas Ludovico Silva'),
(55, 'uni0055', 'edo0019', '(UPTPJJM) - Universidad Politécnica Territorial De Portuguesa Juan De Jesús Montilla'),
(56, 'uni0056', 'edo0020', '(UDO) -  Universidad De Oriente'),
(57, 'uni0057', 'edo0020', '(UPTOSCR) - Universidad Politécnica Territorial Del Oeste De Sucre Clodosbaldo Russian'),
(58, 'uni0058', 'edo0020', '(UPTPLMR) - Universidad Politécnica Territorial De Paria Luis Mariano Rivera'),
(59, 'uni0059', 'edo0021', '(UPTETMBI) - Universidad Politécnica Territorial Del Estado Trujillo Mario Briceño Iragorry'),
(60, 'uni0060', 'edo0022', '(UNET) - Universidad Nacional Experimental Del Táchira'),
(61, 'uni0061', 'edo0022', '(UPTNTMS) - Universidad Politécnica Territorial Del Norte Del Táchira Manuela Sáenz'),
(62, 'uni0062', 'edo0022', '(UPTAIET) - Universidad Politécnica Territorial Agroindustrial Del Estado Táchira'),
(63, 'uni0063', 'edo0023', '(UNEY) - Universidad Nacional Experimental Del Yaracuy'),
(64, 'uni0064', 'edo0023', '(UPTYAB) - Universidad Politecnica Territorial De Yaracuy Arístide Bastidas'),
(65, 'uni0065', 'edo0024', '(UNESUR) - UNIVERSIDAD NACIONAL EXPERIMENTAL SUR DEL LAGO JESÚS María SEMPRUM'),
(66, 'uni0066', 'edo0024', '(UNERMB) - Universidad Nacional Experimental Rafael María Baralt'),
(67, 'uni0067', 'edo0024', '(LUZ) - Universidad Del Zulia'),
(68, 'uni0068', 'edo0024', '(UPTM) - Universidad Politécnica Territorial De Maracaibo'),
(69, 'uni0069', 'edo0024', '(UPTZ) - Universidad Politécnica Territorial Zulia');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



