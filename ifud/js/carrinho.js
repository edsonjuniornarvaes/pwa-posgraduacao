
//adicionar produto ao carrinho
function addProduto(id) {
	//recuperar do cache
	let dados = JSON.parse( localStorage.getItem("produtoproduto"));
	
	
console.log(dados)
	$("#msg").html(`<p class='pulse red darken-4 center-align'>Aguarde... adicionando produto...</p>`);

	$(document).scrollTop(0);

	let carrinho = dados;

	if (carrinho) {
		//iniciar carrinho
		let arrCarr = [];
		arrCarr.push(carrinho[0])

		arrCarr.forEach(element => {
			
		//verificar se já existe este item no carrinho
		c = buscaItem(arrCarr, element.id);
		if ( c == 0 ){

			//guardar item no carrinho
			console.log("Item adicionado ao carrinho: "+element.produto);

			//criar um item produto para inserir no carrinho
			p = {
				id: element.id,
				produto: element.produto,
				foto: element.foto,
				valor: element.valor,
				qtde: 1
			};
			//adicionar o p ao carrinho
			arrCarr.push(p);
			localStorage.setItem("carrinho", JSON.stringify(arrCarr));

		} else {
			c++;
			p = {
				id: element.id,
				produto: element.produto,
				foto: element.foto,
				valor: element.valor,
				qtde: c
			};
			//adicionar o p ao carrinho
			arrCarr.push(p);
			localStorage.setItem("carrinho", JSON.stringify(arrCarr));
			//já tem o item no carrinho
			$("#msg").html("<p class='pulse red darken-4 center-align'>Aguarde... adicionando produto...</p>");
		}
	});

	mostraCarrinho();
	}
}

//função para mostrar o carrinho
function mostraCarrinho() {

	$("#msg").html("<img src='images/load.gif' width='50px'><br>Carregando carrinho de compras");

	//pegar o carrinho do cache
	carrinho = localStorage.getItem("carrinho");

	if ( !carrinho ) {

		$("#msg").html("<p class='pulse red darken-4 center-align'>Não existem produtos no carrinho...</p>");

	} else {

		$("#modalPedido").modal('open');
		carrinho = JSON.parse(carrinho);
		preencherCarrinho( carrinho );

	}

}

//preencher carrinho
function preencherCarrinho( dados ) {
	total = 0.00;
	$("#modalPedido tbody").html("");
	$.each(dados, function( key, val ) {
		
		var valor = formataValor( parseFloat ( val.valor , "br" ) );
		total = parseFloat( total ) + parseFloat ( val.valor ) ;
		
		$("#modalPedido tbody").append(`
			<tr id="linha${key}">
				<td><img src="${val.foto}" alt="${val.produto}" width="60px"></td>
				<td>${val.produto}</td>
				<td>${valor}</td>
				<td><a href="javascript:remover(${key})" class="waves-effect waves-light btn red darken-5">
					<i class="material-icons">clear</i>
				</a></td>
			</tr>
		`);
		$("#msg").html("");
	});

	t = formataValor( parseFloat ( total ), "br" );
	$(".valor").html("R$ " + t);
}

//funcao para buscar item no carrinho
function buscaItem(carrinho,id) {
	c = 0;
	$.each(carrinho, function ( key, val ){
		if ( val.id == id ) c++;
	})
	return c;
}


//remover
function remover( produto ){
	if ( confirm ( "Quer mesmo remover este produto? " ) ) {
		carrinho = JSON.parse( localStorage.getItem("carrinho") );
		carrinho.splice(produto, 1);
		carrinho = JSON.stringify( carrinho );
		localStorage.setItem("carrinho", carrinho);
		mostraCarrinho();
	}
}


//botao carrinho
$(".btn-carrinho").click(function(){
	$('#modalPedido').modal('open');
	mostraCarrinho();
})