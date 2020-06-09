$("#msg").html("<img src='images/load.gif' width='50px'><br>Carregando carrinho de compras");

//pegar o carrinho do cache
carrinho = localStorage.getItem("carrinho");

if ( !carrinho ) {

	$("#msg").html("<p class='pulse red darken-4 center-align'>Não existem produtos no carrinho...</p>");

} else {

	carrinho = JSON.parse(carrinho);
	preencherCarrinho( carrinho );

}

function preencherCarrinho( dados ) {
	
	$("tbody").html("");
	total = i = 0;
	$.each(dados, function( key, val ) {
		i++;

		var valor = formataValor( parseFloat ( val.valor ) , "br" );
		var valorps = formataValor( parseFloat ( val.valor ) , "en" );
		total = parseFloat ( total ) + parseFloat ( val.valor );
		console.log( total );
		
		$("tbody").append(`
			<tr id="linha${key}">
				<td><img src="${val.foto}" alt="${val.produto}" width="60px"></td>
				<td>${val.produto}</td>
				<td>${valor}</td>
				<td><a href="javascript:remover(${key})" class="waves-effect waves-light btn red darken-5">
					<i class="material-icons">clear</i>
				</a></td>
			</tr>
		`);
		$(".itens").append(`
			<input name="itemId${i}" type="hidden" value="${i}">  
	        <input name="itemDescription${i}" type="hidden" value="${val.produto}">  
	        <input name="itemAmount${i}" type="hidden" value="${valorps}">  
	        <input name="itemQuantity${i}" type="hidden" value="1">  
	        <input name="itemWeight${i}" type="hidden" value="500"> 
		`);

		$("#msg").html("");

	});

	t = formataValor( parseFloat( total ), "br" );
	$(".valor").html("R$ " + t);
}