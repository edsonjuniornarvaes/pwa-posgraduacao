<div class="container">
	<h1>Finalizar Pedido</h1>
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
	  			<td class="valor" colspan="2">R$ 0,00</td>
	  		</tr>
	  	</tfoot>
    </table>

    <h1>Seus dados:</h1>

    <form method="post" target="pagseguro"  action="https://pagseguro.uol.com.br/v2/checkout/payment.html" target="_blank">  
		<!-- Campos obrigatórios -->  
        <input name="receiverEmail" type="hidden" value="suporte@lojamodelo.com.br">  
        <input name="currency" type="hidden" value="BRL"> 

        <!-- Dados do comprador (opcionais) -->  
        <input name="senderName" type="text" value="" required> 
        <label for="senderName">Nome do cmprador:</label>

        <input name="senderEmail" type="text" value="" required> 
        <label for="senderEmail">Seu e-mail</label>

        <div class="itens"></div>
        <br>
    	
	    <button type="submit" class="btn red">Pagar</button>
	</form>
</div>
