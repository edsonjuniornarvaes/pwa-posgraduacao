//funcao para formatar a moeda em javascript
function formataValor( valor, formato ) {

	if ( formato == "br") 
		valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
	else
		valor = valor.toLocaleString('en-US', { minimumFractionDigits: 2});

	return valor;
}

//funcao para preencher os produtos
function preencher( obj, dados ) {

	$.each( dados, function( key, val ) {

		var valor = formataValor( parseFloat ( val.valor ), "br" );
		//adicionar os itens no .row
		$(obj).append(
			`<div class='col l3 m6 s12 center-align'>
				<div class='card'>
					<img src='${val.foto}' alt='${val.produto}' title='${val.produto}' class='thumb responsive-img'>
					<h2>${val.produto}</h2>
					<p class='valor'>${valor}</p>
					<a href='produto/${val.id}' class='btn red darken-4'>Detalhes</a>
				</div>
			</div>`);
	})
	$("#msg").html("");

}

//preencher dados do produto
function preencherProduto(dados) {

	$.each(dados, function( key, val ) {
		var valor = formataValor( parseFloat ( val.valor ), "br" );
		$("h1").html(val.produto);
		$("#produto").html(`
			<div class='center-align'>
				<img src='${val.foto}' alt='${val.produto}' title='${val.produto}' class='thumb responsive-img'>
				<p><strong>Ingredientes:</strong><br>${val.ingredientes}</p>
				<p class='valor'>${valor}</p>
				<p>
					<button type='button' onclick='addProduto(${val.id})' class='btn btn-large red darken-4'>
						Adicionar ao Pedido
					</button>
				</p>
			</div>
		`);

	});

}

//retornar id da pagina
function retornaId(pos) {
	pagina = window.location.href;
	p = pagina.split("/");
	return p[pos];
}


// carregar categorias
var categoria = localStorage.getItem("categoria");

if ( categoria ) {

	console.log("Categorias do Cache");
	var dados = JSON.parse(categoria);
	preencherCategoria( dados );

} else {

	//buscar os produtos em destaque
	$.getJSON("../json/categoria.php?op=categorias",
		function() {

		$("#msg").html("<div class='alert alert-warning'><img src='imagens/load.gif' width='50px'> Carregando...</div>");

	}).done( function (dados) {

		console.log("Categorias armazenados no Cache");
		localStorage.setItem("categoria", JSON.stringify(dados));
		preencherCategoria( dados );

	});

}

//preencher categorias no menu
function preencherCategoria( dados ) {
	$.each(dados, function( key, val ) {

		$("#categorias").append(`
			<li><a href="categoria/${val.id}">${val.categoria}</a></li>
		`);
		$("#msg").html("");

	});
}




//adicionar service worker caso o navegador suporte
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration){
  	console.log("Service worker registrado com sucesso no escopo: ", registration.scope);
  }, function(err){
  	console.log("Opa! Erro ao registrar service worker", err)
  });
}

let deferredPrompt;
const addBtn = document.querySelector('#instalar');

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt...');
    addBtn.style.display = 'block';
    e.preventDefault();
    deferredPrompt = e;
    addBtn.addEventListener('click', (e) => {
        addBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the prompt');
                
            } else {
                console.log('User dismissed the prompt');
            }
            deferredPrompt = null;
        });
    });
});
//se esta instalado
window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs instalado');
});