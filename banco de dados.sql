-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: opmy0003.servidorwebfacil.com:3306
-- Generation Time: 15-Mar-2020 às 10:58
-- Versão do servidor: 5.6.23-log
-- versão do PHP: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `burnes_pwa`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id`, `categoria`) VALUES
(1, 'Bebidas'),
(2, 'Lanches'),
(3, 'Acompanhamento');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `item`
--

CREATE TABLE `item` (
  `venda_id` int(11) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `loja`
--

CREATE TABLE `loja` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `produto` varchar(100) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `ingredientes` varchar(255) NOT NULL,
  `valor` double NOT NULL,
  `foto` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `produto`, `categoria_id`, `ingredientes`, `valor`, `foto`) VALUES
(1, 'Xis Beicon', 2, 'Hamburguer, Bacon, Queijo, Picles, Tomate e Alface', 39.9, '01-bacon.png'),
(2, 'Cheese Burger', 2, 'Pão com gergelim, um saboroso hambúrguer de pura carne bovina, uma fatia de queijo derretido, duas fatias de picles, ketchup e mostarda.', 29.9, '02-cheese.png'),
(3, 'Cheese Burger Beico', 2, 'Pão com gergelim, um saboroso hambúrguer de pura carne bovina, uma fatia de queijo derretido, duas fatias de picles, fatias de bacon crocante, ketchup e mostarda.', 32.9, '03-cheese-bacon.png'),
(4, 'Triplo Beico', 2, '3 Hamburgueres, queijo e 2 fatias de bacon com molho especial.', 39.9, '04-triplo-beico.png'),
(5, 'Mega Triplo Beico', 2, '3 Hamburgueres, 3x mais Beico, queijo e molho especial', 39.9, '05-mega.png'),
(6, 'Cheese Salada', 2, 'Pão com gergelim, um suculento hambúrguer de pura carne bovina, duas fatias de queijo derretido, quatro fatias de picles, alface, tomate, cebola, maionese e ketchup.', 24.9, '06-salada.png'),
(7, 'Churrasco Burger', 2, 'Hambúrguer grelhado no fogo como churrasco, queijo derretido, onion rings e molho barbecue.', 29.9, '07-barbecue.png'),
(8, 'Chicken Franrgo', 2, 'Pão de brioche, um delicioso e suculento filé de peito de frango crocante, maionese, alface, tomate e duas fatias de queijo cheddar.', 29.9, '08-frango.png'),
(9, 'H2OH! Limão', 1, 'Bebida 500ml', 7.9, '09-h2o.png'),
(10, 'H2OH! Laranja', 1, 'Bebida 500ml', 7.9, '09-h2o.png'),
(11, 'Guaraná Antarctica', 1, 'Um refrigerante geladinho na medida certa para te refrescar e acompanhar seu sanduíche preferido.', 9.9, '10-guarana.png'),
(12, 'Pepsi', 1, 'Um refrigerante geladinho na medida certa para te refrescar e acompanhar seu sanduíche preferido.', 9.9, '11-pepsi.png'),
(13, 'Batata Frita', 3, '200 gramas de batata crocante com pedaços de beico', 9.9, '12-batata.png'),
(14, 'Yuka Fries', 3, 'Bolinhos de mandioca recheados com queijo.', 14.9, '13-mandioca.png'),
(15, 'Mini Chicken', 3, 'Pedaços de frango empanados, sempre crocantes e com tempero suave.', 9.9, '14-mini.png'),
(16, 'Bolovo', 3, '2 Bolovos cobertos com carne ', 9.9, '15-bolovo.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `venda`
--

CREATE TABLE `venda` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `loja_id` int(11) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`venda_id`,`produto_id`),
  ADD KEY `produto_id` (`produto_id`);

--
-- Indexes for table `loja`
--
ALTER TABLE `loja`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indexes for table `venda`
--
ALTER TABLE `venda`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `loja_id` (`loja_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `venda`
--
ALTER TABLE `venda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`),
  ADD CONSTRAINT `item_ibfk_2` FOREIGN KEY (`venda_id`) REFERENCES `venda` (`id`);

--
-- Limitadores para a tabela `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`);

--
-- Limitadores para a tabela `venda`
--
ALTER TABLE `venda`
  ADD CONSTRAINT `venda_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  ADD CONSTRAINT `venda_ibfk_2` FOREIGN KEY (`loja_id`) REFERENCES `loja` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
