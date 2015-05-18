$(function() {
	$("#numero").html("<h2 style='text-align: center;'> Número:"+(Math.floor(Math.random() * 9999) + 1)+"</h2>");
	
	$( "li" ).each(function( index ) {
		$(this).draggable();
	});
	
	$("#corrigir").click(function() {
		var mensagem ="";
		var milhar = $("#M").val() *100;
		var centena = $("#C").val() *10;
		var dezena = $("#D").val() *1;
		var unidade = $("#U").val();
		var result = milhar+centena+dezena+unidade;
		alert(result);
		if($("#numero").text() == result){
			mensagem = "<h3 style='text-align: center;'>Acertou!</h3>";
			$("#numero").html("<h2 style='text-align: center;'>"+(Math.floor(Math.random() * 9999) + 1)+"</h2>");
		}else{
			mensagem = "<h3 style='text-align: center;'>Resposta errada!</h3>";
		}
		$("#M").val("");
		$("#C").val(""); 
		$("#D").val(""); 
		$("#U").val("");
		$("#mensagem").append(mensagem);
		$("#mensagem").children().fadeOut("xslow");
	});
});