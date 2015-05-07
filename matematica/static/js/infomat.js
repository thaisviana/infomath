$(function() {

	$("#extend_add").hide();
	$("#extend_sub").hide();
	$("#extend_money").hide();
	$("#extend_mcdu").hide();
	var primeiro;
	var segundo;
	$("#add").click(function(event) {	
		$("#extend_add").show();
		$("#extend_sub").hide();
		$("#extend_money").hide();
		$("#extend_mcdu").hide();
		primeiro = Math.floor(Math.random() * 98) + 1;
		segundo = Math.floor(Math.random() * 20) + 1;
		$("#1n_add").text(primeiro);
		$("#2n_add").text(segundo);
		
	});
	
	$("#enviar_add").click(function(event) {	
		var mensagem="";
		var result = primeiro+ segundo;
		var input_result = $('#result_input_add').val();
		if( input_result == result){
			mensagem="Acertou mané!";
			primeiro = Math.floor(Math.random() * 98) + 1;
			segundo = Math.floor(Math.random() * 20) + 1;
			$("#1n_add").text(primeiro);
			$("#2n_add").text(segundo);
			$('#result_input_add').val("");
			
		}else {
			mensagem="Perdeu playboy!";
			$('#result_input_add').val("");
			
		}
		$('#mensagem').text(mensagem);
	});
	
	$("#sub").click(function(event) {	
		$("#extend_sub").show();
		$("#extend_add").hide();
		$("#extend_money").hide();
		$("#extend_mcdu").hide();
		
		primeiro = Math.floor(Math.random() * 98) + 1;
		segundo = Math.floor(Math.random() * 20) + 1;
		$("#1n_sub").text(primeiro);
		$("#2n_sub").text(segundo);
	});
	
	$("#enviar_sub").click(function(event) {	
		var mensagem="";
		var result = primeiro+ segundo;
		var input_result = $('#result_input_sub').val();
		if( input_result == result){
			mensagem = "Acertou mané!";
			primeiro = Math.floor(Math.random() * 98) + 1;
			segundo = Math.floor(Math.random() * 20) + 1;
			$("#1n_sub").text(primeiro);
			$("#2n_sub").text(segundo);
			$('#result_input_sub').val("");
			
		}else {
			mensagem="Perdeu playboy!";
			$('#result_input_sub').val("");
		}
		$("#mensagem" ).text(mensagem);
	
	});
	
	$("#money").click(function(event) {	
		$("#extend_money").show();
	});
	
	$("#mcdu").click(function(event) {	
		$("#extend_mcdu").show();
	});
	
});