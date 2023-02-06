-- -- Host: 127.0.0.1

-- -- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- SET AUTOCOMMIT = 0;
-- START TRANSACTION;
-- SET time_zone = "+00:00";


-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;

-- --
-- -- Database: `mysql`
-- --

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `users`
-- --

-- CREATE TABLE `users` (
--   `id` int(11) NOT NULL,
--   `name` varchar(255) DEFAULT NULL,
--   `person_Id` varchar(255) DEFAULT NULL,
--   `password` varchar(255) DEFAULT NULL,
--   `refresh_token` text DEFAULT NULL,
--   `createdAt` datetime NOT NULL,
--   `updatedAt` datetime NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --
-- -- Dumping data for table `users`
-- --

-- INSERT INTO `users` (`id`, `name`, `personalId`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
-- (1, 'fahime', '63524187', '$2b$10$Wr4EunRyINxZpyEWft9weuS6e04KuGYnLhuiiiKTiPTrDcv3ftv4i', NULL, '2023-01-01 04:41:29', '2023-01-01 07:18:50'),
-- (2, 'alikhani', '63541258', '$2b$10$xp6VYwckwTrjhUCWgf5X3u4lFZq/NDC0/PGPh9TFT0lDICNDriPla', NULL, '2023-01-01 15:18:26', '2023-01-01 03:51:10');

-- --
-- -- Indexes for dumped tables
-- --

-- --
-- -- Indexes for table `users`
-- --
-- ALTER TABLE `users`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT for dumped tables
-- --

-- --
-- -- AUTO_INCREMENT for table `users`
-- --
-- ALTER TABLE `users`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
-- COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;