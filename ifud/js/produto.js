var id = retornaId(5);

$(document).ready(function(){

	if ( id == undefined ) {
		//se o produto nao existir
		$("h1").html("Produto inexistente");

	} else {

		//recuperar do cache
		let produto = JSON.parse( localStorage.getItem("produtoproduto"));
		// produtos = JSON.parse( localStorage.getItem("produto"));


		//verificar se o produto existe no cache
		if ( produto ) {
			//produto do cache
			dados = produto
			preencherProduto(dados);
			console.log("Produto carregado do cache");
		} else {
			//produto do json
			$.getJSON("../json/produtos.php?op=produto&id="+id, function(){

				$("#msg").html("<img src='images/load.gif' width='50px'><br> Carregando produtos...");

			}).done(function(dados){

				preencherProduto(dados);
				cache = JSON.stringify(dados);
				localStorage.setItem("produto"+id, cache);
				console.log("Produto armazenado no cache");
				$("#msg").html("");

			}).fail(function(){

				$("#msg").html("Erro ao carregar produto");

			})
		}

	}

})