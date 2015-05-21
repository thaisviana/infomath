$(function() {
	var n1 =0;
	var n2=0;
	var resultado_correto =0;
	
	$('#vis_content').hide();
	$('#r_abs').hide();
	$('#rep').hide();
	$('#bowl').hide();
	
	$("#v_menu").click(function() {
		carregar_vis();
		$('#vis_content').show();
		$('#r_abs').hide();
		$('#abs_content').hide();
		$('#rep').hide();
	});
		
	
	$( "#a_menu" ).click(function() {
		carregar_abs();
		$('#r_abs').show();
		$('#vis_content').hide();
		$('#abs_content').show();
		$('#rep').hide();
	});
	
	if ($('#vis_content').length ) {
		$("#vis_enviar").click(function() {
			calcular_vis();
		});
	}
	
	if ($('#r_abs').length ) {
		$("#abs_enviar").click(function() {
			calcular_abs();
		});
	}
		
});
function calcular_vis() {
	
	var v1= $("#n1_vis").data( "role" );
	var v2 = $("#n2_vis").data( "role" );
	var mensagem ="";
	if($("#v_resultado").val() == (v1+v2)){
		mensagem ="<div><h1>Acertou!</h1></div>";
		$("#op_vis").remove();
		$("#n1_vis").remove();
		$("#n2_vis").remove();
		$("#borda_vis").remove();
		carregar_vis()
	}else{
		mensagem ="<div>Resposta Errada</div>";
	}
	$("#v_resultado").val("");
		$("#mensagem").append(mensagem);
		$("#mensagem").children().fadeOut(5000);
     
}
function carregar_vis() {
     	var img1="";
		var img ="";
		n1 = (Math.floor(Math.random() * 10) + 1);
		n2 = (Math.floor(Math.random() * 10) + 1);
		for (var i = 1; i <= n1; i++) {
			img1 = img1 + ("<img src='/static/img/bone.png' />");
		}
		for (var i = 1; i <= n2; i++) {
			img = img + ("<img src='/static/img/bone.png' />");
		}
		var div_borda = "<div class='col-md-1' id='borda_vis'></div>";
		var div_n1 = "<div class='col-md-3' data-role='"+n1+"' id='n1_vis'> "+img1+"</div>";
		var div_op = "<div class='col-md-1' id='op_vis' style='text-align: center;'> <h4>+</h4></div>";
		var div_n2 = "<div class='col-md-3' data-role='"+n2+"' id='n2_vis'> "+img+"</div>";
		
		$("#r_vis").before(div_borda+ div_n1+div_op+div_n2);
}

function calcular_abs() {
	var v1= $("#n1_abs").data( "role" );
	var v2 = $("#n2_abs").data( "role" );
	var mensagem ="";
	if($("#a_resultado").val() == (v1+v2)){
		mensagem = "<div><h1>Acertou!</h1></div>";
		$("#n1_abs").remove();
		$("#n2_abs").remove();
		$("#op_a").remove();
		$("#borda_abs4").remove();$("#borda_abs").remove();$("#borda_abs3").remove();
		carregar_abs()
	}else{
		mensagem = "<div>Resposta Errada</div>";
	}
     $("#a_resultado").val("");
		$("#mensagem").append(mensagem);
		$("#mensagem").children().fadeOut(5000);
}


function carregar_abs() {
     	var img1="";
		var img ="";
		u1 = Math.floor(Math.random() * 9) + 1;
		u2 = Math.floor(Math.random() * 9) + 1;
		d2 = Math.floor(Math.random() * 9) + 1;
		d1 = Math.floor(Math.random() * 9) + 1;	
		img1 = "<img  src='/static/img/numbers/"+d1+".png' /><img  class='border-left' ' src='/static/img/numbers/"+u1+".png' />";
		img = "<img src='/static/img/numbers/"+d2+".png' /><img class='border-left' src='/static/img/numbers/"+u2+".png' />";
		/*if(n1==10){
			img1 = "<img src='/static/img/numbers/1.png' /><img src='/static/img/numbers/0.png' /><img src='/static/img/numbers/1.png' /><img src='/static/img/numbers/0.png' />";
			if(n2!=10)
				img = "<img src='/static/img/numbers/0.png' /><img src='/static/img/numbers/"+d2+".png' /><img src='/static/img/numbers/0.png' /><img src='/static/img/numbers/"+u2+".png' />";
		}
		if(n2==10){
			if(n1!=10)
				img1 = "<img src='/static/img/numbers/0.png' /><img src='/static/img/numbers/"+d1+".png' /><img src='/static/img/numbers/0.png' /><img src='/static/img/numbers/"+u1+".png' />";
			img = "<img src='/static/img/numbers/1.png' /><img src='/static/img/numbers/0.png' /><img src='/static/img/numbers/1.png' /><img src='/static/img/numbers/0.png' />";
		}*/
		var n1 = (d1*10) +u1;
		var n2 = (d2*10) +u2;	
		var div_borda = "<div class='col-md-1' id='borda_abs'></div>";
		var div_borda4 = "<div class='col-md-3' id='borda_abs4'></div>";
		var div_borda3 = "<div class='col-md-1' id='borda_abs3'></div>";
		var div_n1 = "<div  id='n1_abs' data-role='"+n1+"''> "+img1+"</div>";
		var div_n2 = "<div class='col-md-3'   id='n2_abs' data-role='"+n2+"'> "+img+"</div>";
		var div_op = "<div class='col-md-2' id='op_a' style='text-align: center;'> <h1>+</h1></div>";
	
		$("#r_abs").before(div_borda4+div_n1+div_borda3+div_op+div_n2+div_borda);
}
