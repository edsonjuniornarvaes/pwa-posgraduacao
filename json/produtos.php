<?php
	header("Content-type: application/json; charset=utf-8");

	include "../config/config.php";

	if ( isset ( $_GET["op"] ) ) {

		$op = trim ( $_GET["op"] );

		if ( $op == "produto" ) {

			$id = trim ( $_GET["id"] );
			
			$sql = "select * from produto where id = $id";

			$consulta = $pdo->prepare($sql);
			$consulta->bindParam(1, $id);
			$consulta->execute();

			$d = $consulta->fetch(PDO::FETCH_OBJ);

			$id = $d->id; $categoria = $d->categoria; $produto = $d->produto; $ingredientes = $d->ingredientes; $valor = $d->valor; $foto = "produtos/".$d->foto;
			$dados[] = array("id"=>$id, "produto"=>$produto, "valor"=>$valor, "foto"=>$foto, "ingredientes"=>$ingredientes, "categoria"=>$categoria);
			
		} else {


			if ( isset ( $_GET["id"] ) ) $id = trim ( $_GET["id"] );

			$sql = "select p.*, c.categoria from categoria c 
				inner join produto p on (p.categoria_id = c.id)
				order by rand() limit 4";

			$consulta = $pdo->prepare($sql);
			$consulta->bindParam(1, $id);
			$consulta->execute();

			while ( $d = $consulta->fetch(PDO::FETCH_OBJ) ) {

				$id = $d->id; $categoria = $d->categoria; $produto = $d->produto; $ingredientes = $d->ingredientes; $valor = $d->valor; $foto = "produtos/".$d->foto;
				$dados[] = array("id"=>$id, "produto"=>$produto, "valor"=>$valor, "foto"=>$foto, "ingredientes"=>$ingredientes, "categoria"=>$categoria);

			}

		}

	} else {

		$dados[] = array("erro"=>"Não foi possível mostrar os dados"); 

	}

	echo json_encode( $dados );