<?php
	/*
	* definições para conexão com o banco de dados
	*/
	try {

		define("SERVER","localhost");
		define("DB","pwa");
		define("USER","root");
		define("PWD","");	
	
		$pdo = new PDO ("mysql:host=".SERVER.";dbname=".DB.";charset=utf8",USER,PWD);

	} catch (PDOException $e) {

		echo "<div class='alert alert-danger'>Erro ao conectar no banco de dados: " . $e->getMessage()."</div>";
		exit;

	}