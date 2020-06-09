$(document).ready( function (){
	
	var id = retornaId(5);

	var produtos = localStorage.getItem("categoria"+id);

	if ( produtos ) {

		console.log("Produtos do Cache");
		var produtos = JSON.parse(produtos);
		preencher( '.destaques', produtos );

	} else {

		//buscar os produtos em destaque
		$.getJSON("../json/categoria.php?op=categoria&id="+id,
			function() {

			$("#msg").html("<div class='alert alert-warning'><img src='imagens/load.gif' width='50px'> Carregando...</div>");

		}).done( function (produtos) {

			console.log("Produtos armazenados no Cache");
			localStorage.setItem("categoria"+id, JSON.stringify(produtos));
			preencher( '.destaques', produtos );

		});

	}

	
})