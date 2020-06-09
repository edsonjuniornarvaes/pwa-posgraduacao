<?php
	session_start();

	if ( $_POST ) {

		$id = $_POST["produto"];

	} else {
		echo "Erro ao adicionar produto";
	}