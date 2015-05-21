$(function() {
	var numero = (Math.floor(Math.random() * 9999) + 1);
	$("#numero").html("<h2 style='text-align: center;'> Número:"+numero+"</h2>");
	$("#numero").attr("data-role", numero)
	 var m = 0; var c = 0;var d = 0;var u = 0;
	$( "li" ).each(function( index ) {
		$(this).draggable();
	});
	
	$("#m").droppable({
      drop: function( event, ui ) {
		$(this).css( "border", "12px solid #456eba" );
        m = (ui.draggable.attr('id'));
      }
    });
	
	$("#c").droppable({
      drop: function( event, ui ) {
		$(this).css( "border", "12px solid #d7e836 " );
       	c =(ui.draggable.attr('id'));
      }
    });
	
	$("#d").droppable({
      drop: function( event, ui ) {
		$(this).css( "border", "12px solid #e8366c" );
        d =(ui.draggable.attr('id'));
      }
    });
	
	$("#u").droppable({
      drop: function( event, ui ) {
		$(this).css( "border", "12px solid  #3bb13b" );
        u = (ui.draggable.attr('id'));
      }
    });
	
	
	$("#corrigir").click(function() {
		var n = $("#numero").data( "role" ) *1;
		var milhar = (m*1000);
		var centena = (c*100);
		var dezena = (d*10);
		var unidade = (u*1);
		
		var result = milhar+centena+dezena+unidade;
		if(result == n){
			alert("Resposta correta");
			location.reload();
		}else{
			alert(result +" = " +n );
		}
	});
});