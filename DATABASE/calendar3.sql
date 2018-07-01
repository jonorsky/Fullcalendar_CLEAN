-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 01, 2018 at 10:40 PM
-- Server version: 10.1.30-MariaDB-0ubuntu0.17.10.1
-- PHP Version: 7.1.17-0ubuntu0.17.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `calendar3`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `color` varchar(7) NOT NULL DEFAULT '#3a87ad',
  `start` datetime NOT NULL,
  `end` datetime DEFAULT NULL,
  `allDay` varchar(50) NOT NULL DEFAULT 'true'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `description`, `color`, `start`, `end`, `allDay`) VALUES
(6, 'Edit natin to pls huhuhwwww', 'wqeqwe', '#ed0917', '2018-07-05 00:00:00', '2018-07-06 00:00:00', 'true'),
(11, 'Damit', 'poooppwww', '#3a87ad', '2018-07-04 00:00:00', '2018-07-05 00:00:00', 'true'),
(12, 'qweqwe', 'qweqwe', '#3a87ad', '2018-07-03 00:00:00', '2018-07-04 00:00:00', 'true'),
(13, 'AAAA', 'ssss', '#127796', '2018-07-10 00:00:00', '2018-07-11 00:00:00', 'true'),
(14, 'FGGGGsddd', 'SSSSaaaaa', '#17ffe3', '2018-07-13 00:00:00', '2018-07-14 00:00:00', 'true'),
(16, 'Damit', 'daaa', '#53a116', '2018-07-19 00:00:00', '2018-07-20 00:00:00', 'true'),
(17, 'XXX', 'vvv', '#3a87ad', '2018-07-12 00:00:00', '2018-07-13 00:00:00', 'true'),
(18, 'Dream Team', 'Dreamer', '#ff6b00', '2018-07-11 00:00:00', '2018-07-12 00:00:00', 'true'),
(19, 'HHHHHHHHHHH', 'XXXXXXXXXXX', '#3a87ad', '2018-07-09 00:00:00', '2018-07-10 00:00:00', 'true'),
(21, 'Test Tile', 'ssss', '#000000', '2018-07-17 00:00:00', '2018-07-17 05:00:00', 'true'),
(23, 'bago toh', 'muah', '#00f0ff', '2018-07-16 00:00:00', '2018-07-17 00:00:00', 'true'),
(24, 'seriously', 'wtf is dat shit?', '#238213', '2018-07-17 05:30:00', '2018-07-17 11:00:00', 'true'),
(25, 'Dream High', 'Nostalgia\n', '#3a87ad', '2018-07-20 00:00:00', '2018-07-21 00:00:00', 'true'),
(26, 'inserted', 'here', '#ff4c4c', '2018-07-18 03:00:00', '2018-07-18 03:30:00', 'true'),
(27, 'inserted', 'here', '#ff4c4c', '2018-07-18 04:00:00', '2018-07-18 04:30:00', 'true');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
