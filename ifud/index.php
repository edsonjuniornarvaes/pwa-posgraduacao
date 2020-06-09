<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<title>iFud</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<base href="<?php echo "https://".$_SERVER["HTTP_HOST"].$_SERVER["SCRIPT_NAME"]; ?>">
		<!--Import Google Icon Font-->
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<!--Import materialize.css-->
		<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection">
		<link rel="stylesheet" type="text/css" href="css/style.css">	

		<link rel="apple-touch-icon" sizes="72x72" href="images/apple-72.png">
		<link rel="apple-touch-icon" sizes="114x114" href="images/apple-114.png">
		<link rel="icon" sizes="48x48" href="images/icon-48.png">
		<link rel="icon" sizes="96x96" href="images/icon-96.png">
		<link rel="icon" sizes="114x114"href="images/icon-114.png">	

		<link rel="manifest" href="manifest.json">
	</head>
	<body>
		<div class="navbar-fixed">
		  <ul id="categorias" class="dropdown-content">
			
		  </ul>
		  <nav class="red darken-4">
		    <div class="nav-wrapper">
		      <a href="index.php" class="brand-logo">
		      	<img src="images/logo.png" title="ifud" alt="ifud" height="50px">
		      </a>
		      <a href="#" data-target="mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      
		      <ul id="nav-mobile" class="right hide-on-med-and-down">
		        <li><a href="sobre">Sobre</a></li>
		        <li><a class="dropdown-trigger" href="#!" data-target="categorias">
		        	Categorias <i class="material-icons right">arrow_drop_down</i></a>
		        </li>
		        <li><a href="contato">Contato</a></li>
		        <li><a href="javascript:;" class="btn-carrinho">
	        		<i class="material-icons">shopping_cart</i>
	        	</a></li>
	        	<li><a href="javascript:;" onclick="$('#modalLogin').modal('open');">
		        	<i class="material-icons">account_circle</i>
		        </a></li>
		      </ul>
		    </div>
		  </nav>
		</div>

		<ul id="mobile" class="sidenav">
	        <li><a href="sobre">Sobre</a></li>
	        <li><a class="dropdown-trigger" href="#!" data-target="categorias">
	        	Categorias <i class="material-icons right">arrow_drop_down</i></a>
	        </li>
	        <li><a href="contato">Contato</a></li>
	        <li><a href="javascript:;" class="btn-carrinho">
        		<i class="material-icons">shopping_cart</i>
        	</a></li>
        	<li><a href="javascript:;" onclick="$('#modalLogin').modal('open');">
	        	<i class="material-icons">account_circle</i>
	        </a></li>
	    </ul>

	    <main>
	    	<div class="container" id="msg"></div>
	    	<?php
	    		$page = "home";

	    		if ( isset ( $_GET["param"] ) ) {
	    			$param = explode("/",$_GET["param"]);
	    			$page = $param[0]; 
	    		}

	    		$pagina = "pages/".$page.".php";

	    		if ( file_exists ( $pagina ) )  include $pagina;
	    		else include 'pages/erro.php';

	    	?>
	    </main>

	    <footer class="page-footer red darken-4">
	    	<div class="container">
	    		<div class="row">
	    			<div class="col l4 s12">
	    				<img src="images/logo.png" title="ifud" alt="ifud">
	    			</div>
	    			<div class="col l4 s12">
	    				<p>
	    					<i class="material-icons">phone_android</i>
	    					(011) 5555-5555
	    				</p>
	    				<p>
	    					<i class="material-icons">location_on</i>
	    					Av. Brasil 123 - Umuarama
	    				</p>
	    			</div>
	    		</div>
	    	</div>
	    	<div class="footer-copyright red darken-3">
	    		<div class="container">
	    			<p class="center-align">
	    				Desenvolvido por Edson
	    			</p>
	    		</div>
    		</div>
	    </footer>

	    <!-- Modal Structure -->
		<div id="modalPedido" class="modal">
		    <div class="modal-content">
		      <h4>Meu pedido</h4>
		      <table style="font-size: 0.8em">
		      	<thead>
		      		<tr>
		      			<th>Foto</th>
		      			<th>Produto</th>
		      			<th>Valor</th>
		      			<th>Excluir</th>
		      		</tr>
		      	</thead>
		      	<tbody>

		      	</tbody>
		      	<tfoot>
		      		<tr>
		      			<td colspan="2">TOTAL:</td>
		      			<td class="valor" colspan="2">0,00</td>
		      		</tr>
		      	</tfoot>
		      </table>
		    </div>
		    <div class="modal-footer">
		      <a href="finalizar" class="waves-effect btn-large red">Finalizar</a>
		      <a href="javascript:;" class="modal-close waves-effect waves-green btn-flat">Fechar</a>
		    </div>
		</div>

		<!-- Modal Structure -->
		<div id="modalLogin" class="modal">
		    <div class="modal-content">
		      <h4>Efetuar Login</h4>
		      <form name="form1" method="post" action="https://pwa.professorburnes.com.br/ifud/login">
		      	<input placeholder="Digite seu email" name="email" id="email" type="text" class="validate">
          		<label for="email">Login/E-mail</label>
          		<br>
          		<input placeholder="Digite sua senha" name="senha" id="senha" type="password" class="validate">
          		<label for="email">Senha</label>
          		<br><br>
          		<button type="submit" class="btn red darken-4">
          			Logar
          		</button>
          		<a href="#!" class="modal-close btn red darken-4">Fechar</a>
		      </form>
		    </div>
		</div>

		<script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
		<script type="text/javascript" src="js/materialize.min.js"></script>
		<script type="text/javascript" src="js/all.js"></script>
		<script type="text/javascript" src="js/carrinho.js"></script>
		<script type="text/javascript" src="js/<?=$page;?>.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
			    $('.sidenav').sidenav();
			    $(".dropdown-trigger").dropdown();
			    $('.modal').modal();
			});
		</script>
	</body>
</html>