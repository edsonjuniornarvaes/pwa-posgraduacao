<?php
	session_start();

	header("Content-type: application/json; charset=utf-8");

	include "../config/config.php";

	if ( $_POST ) {

		$email = $senha = "";

		foreach ($_POST as $key => $value) {
			$$key = trim ( $value );
		}

		if ( !filter_var($email, FILTER_VALIDATE_EMAIL) ) {

			$dados[] = array("erro"=>"Preencha com um e-mail válido"); 

		} else if ( empty ( $senha ) ) {

			$dados[] = array("erro"=>"A senha deve ser preenchida"); 

		} else {
		
			$sql = "select * from cliente where email limit 1";

			$consulta = $pdo->prepare($sql);
			$consulta->bindParam(1, $email);
			$consulta->execute();
			$d = $consulta->fetch(PDO::FETCH_OBJ);

			if ( !password_verify($senha, $d->senha) ) {

				$dados[] = array("erro"=>"Senha inválida"); 

			} else {

				$id = $d->id; $nome = $d->nome;
				$_SESSION["cliente"] = $dados[] = array("id"=>$id, "nome"=>$nome);
				
			}
		}

	} else {

		$dados[] = array("erro"=>"Não foi possível mostrar os dados"); 

	}

	echo json_encode( $dados );