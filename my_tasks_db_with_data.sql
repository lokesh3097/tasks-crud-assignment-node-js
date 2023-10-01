-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2023 at 10:39 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_tasks_db`
--
CREATE DATABASE IF NOT EXISTS `my_tasks_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `my_tasks_db`;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `description` varchar(256) NOT NULL,
  `status` varchar(64) NOT NULL DEFAULT 'OPEN',
  `created_on` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `description`, `status`, `created_on`) VALUES
(1, 'Task 1 Updated', 'This is an Updated Task', 'COMPLETED', '2023-09-30 15:32:18'),
(3, 'Task 2', 'This is a sample task 2', 'OPEN', '2023-09-30 21:29:00'),
(4, 'Task 3', 'This is a sample task 3', 'OPEN', '2023-08-30 21:29:08'),
(5, 'Task 4', 'This is a sample task 3', 'OPEN', '2023-09-30 21:29:12'),
(6, 'Task 5', 'This is a sample task 3', 'OPEN', '2023-09-30 21:29:25'),
(7, 'Task 6', 'This is a sample task 3', 'OPEN', '2023-09-30 21:29:29'),
(8, 'Task 7', 'This is a sample task 3', 'OPEN', '2023-09-30 21:29:33'),
(9, 'Task 8', 'This is a sample task 3', 'OPEN', '2023-09-30 21:29:36'),
(11, 'Task 10', 'This is a sample task 3', 'OPEN', '2023-09-30 21:29:45'),
(12, 'Task 11', 'This is a sample task 3', 'OPEN', '2023-09-30 21:29:51'),
(13, 'Task 12', 'This is a sample task 3', 'OPEN', '2023-09-30 21:29:56'),
(14, 'Task 13', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:00'),
(15, 'Task 14', 'This is a sample task 3', 'INPROGRESS', '2023-08-30 21:30:03'),
(16, 'Task 15', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:06'),
(17, 'Task 16', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:09'),
(18, 'Task 17', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:13'),
(19, 'Task 19 Updated', 'This is an Updated Task', 'inprogress', '2023-09-30 21:30:17'),
(20, 'Task 19', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:20'),
(21, 'Task 20', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:26'),
(22, 'Task 21', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:29'),
(23, 'Task 22', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:32'),
(24, 'Task 23', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:36'),
(25, 'Task 24', 'This is a sample task 3', 'OPEN', '2023-09-30 21:30:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
