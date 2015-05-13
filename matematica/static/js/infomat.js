$(function() {
	var n1 =0;
	var n2=0;
	var resultado_correto =0;
	
	$('#vis_content').hide();
	$('#r_abs').hide();
	
	$( ".a_vis" ).click(function() {
		carregar_vis();
		$('#vis_content').show();
	});
	
	$( ".a_abs" ).click(function() {
		carregar_abs();
		$('#r_abs').show();
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
	if($("#v_resultado").val() == (v1+v2)){
		$("#mensagem").text("Acertou");
		$("#op_vis").remove();
		$("#n1_vis").remove();
		$("#n2_vis").remove();
		$("#borda_vis").remove();
		$("#v_resultado").val("");
		carregar_vis()
	}else{
		$("#v_resultado").val("");
		$("#mensagem").text("Errou");
	}
     
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
	if($("#a_resultado").val() == (v1+v2)){
		$("#mensagem").text("Acertou");
		$("#n1_abs").remove();
		$("#n2_abs").remove();
		$("#op_a").remove();
		$("#borda_abs").remove();
		$("#a_resultado").val("");
		carregar_abs()
	}else{
		$("#a_resultado").val("");
		$("#mensagem").text("Errou");
	}
     
}


function carregar_abs() {
     	var img1="";
		var img ="";
		n1 = Math.floor(Math.random() * 10) + 1;
		n2 = Math.floor(Math.random() * 10) + 1;
		
		img1 = "<img src='/static/img/numbers/"+n1+".png' />";
		img = "<img src='/static/img/numbers/"+n2+".png' />";
		if(n1==10){
			img1 = "<img src='/static/img/numbers/1.png' /><img src='/static/img/numbers/0.png' />";
			if(n2!=10)
				img = "<img src='/static/img/numbers/0.png' /><img src='/static/img/numbers/"+n2+".png' />";
		}
		if(n2==10){
			if(n1!=10)
				img1 = "<img src='/static/img/numbers/0.png' /><img src='/static/img/numbers/"+n1+".png' />";
			img = "<img src='/static/img/numbers/1.png' /><img src='/static/img/numbers/0.png' />";
		}
	
		var div_borda = "<div class='col-md-2' id='borda_abs'></div>";
		var div_n1 = "<div  id='n1_abs' data-role='"+n1+"''> "+img1+"</div>";
		var div_n2 = "<div class='col-md-3'  id='n2_abs' data-role='"+n2+"'> "+img+"</div>";
		var div_op = "<div class='col-md-2' id='op_a' style='text-align: center;'> <h1>+</h1></div>";
	
		$("#r_abs").before(div_borda+ div_n1+div_op+div_n2);
}
