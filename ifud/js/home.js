$(document).ready( function (){

	var destaques = localStorage.getItem("destaques");

	if ( destaques ) {

		console.log("Produtos do Cache");
		var dados = JSON.parse(destaques);
		preencher( '.destaques', dados );

	} else {

		//buscar os produtos em destaque
		$.getJSON("../json/produtos.php?op=destaques",
			function() {

			$("#msg").html("<div class='alert alert-warning'><img src='imagens/load.gif' width='50px'> Carregando...</div>");

		}).done( function (dados) {

			console.log("Produtos armazenados no Cache");
			localStorage.setItem("destaques", JSON.stringify(dados));
			preencher( '.destaques', dados );

		});

	}

	
})