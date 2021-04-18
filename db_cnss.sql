-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 16 avr. 2021 à 12:01
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `db_cnss`
--

-- --------------------------------------------------------

--
-- Structure de la table `agents`
--

CREATE TABLE `agents` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `agents`
--

INSERT INTO `agents` (`id`, `email`, `password`) VALUES
(1, 'agent@gmail.com', 'password123'),
(3, 'agent1@gmail.com', '$2a$10$B9Ho1IymnsXNblwMurUcGuYrjnNW.quNWKquzDhfR80lItoDGYrGi');

-- --------------------------------------------------------

--
-- Structure de la table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `cin` varchar(20) NOT NULL,
  `immatr` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `employees`
--

INSERT INTO `employees` (`id`, `full_name`, `email`, `phone`, `cin`, `immatr`, `password`) VALUES
(1, 'Abdellah Daif', 'employee1@gmail.com', '+212632056086', 'HH14337', '123456789975321', '$2a$10$r5OiziL0jNHvs3XHwyR29u76gT2Zj8yN.mgMkJ2f4exqFP/ADvGeG'),
(2, 'Abdellah Daif', 'sketchdotnet@gmail.com', '+212632056086', 'HH14337', '3456787645678', '$2a$10$LbOYGr5Df/p.PrHFex3pCOOQXtYoZSI3/vAkThSp.qUKSo5z9YU3i'),
(3, 'full name', 'test@gmail.com', '+21260000000000', 'HH565656', '012345678', '$2a$10$BWsbAvPtdmFluBQKjF9px.iPYO3cYHZ3UqiQZTYUYM3SNl7YB/qy2'),
(4, 'full name', 'test@gmail.com', '+21260000000000', 'HH565656', '0123456', '$2a$10$xPqpT8h0o.SpnKqnZC0uBuaDBnKPJCPlWxSwrfhIylNuya1Tu6DMS');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `agents`
--
ALTER TABLE `agents`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
