$(function() {
	var n1 =0;
	var n2=0;
	var resultado_correto =0;
	$( ".a_vis" ).click(function() {
		carregar_vis();
	});
	
	$( ".a_abs" ).click(function() {
		carregar_abs();
	});
	$("#vis_enviar")click(function() {
		alert("aaaaaaaaaai");
	});
	
	$("#abs_enviar")click(function() {
		alert("eeeeeeeeei");
	});
});

function carregar_vis() {
     	var img1="";
		var img ="";
		n1 = Math.floor(Math.random() * 10) + 1;
		n2 = Math.floor(Math.random() * 10) + 1;
		for (var i = 1; i < n1; i++) {
			img1 = img1 + ("<img src='/static/img/bone.png' />");
		}
		for (var i = 1; i < n2; i++) {
			img = img + ("<img src='/static/img/bone.png' />");
		}
		var div_borda = "<div class='col-md-1' ></div>";
		var div_n1 = "<div class='col-md-3' id='n1_vis'> "+img1+"</div>";
		var div_n2 = "<div class='col-md-3' id='n2_vis'> "+img+"</div>";
		var div_op = "<div class='col-md-1' > +</div>";
		var div_r =  "<div class='col-md-3' id='r_vis'> <input type='text' id='resultado' class='form-control'></div><input type='button' id='vis_enviar' class='btn btn-default' value='Enviar'>";
		$("#vis_content").append(div_borda+ div_n1+div_op+div_n2+div_r+div_borda);
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
	
		var div_borda = "<div class='col-md-2' ></div>";
		var div_n1 = "<div  id='n1_vis'> "+img1+"</div>";
		var div_n2 = "<div class='col-md-3'  id='n2_vis'> "+img+"</div>";
		var div_op = "<div class='col-md-2' style='text-align: center;'> <h1>+</h1></div>";
		var div_r =  "<div class='row' id='r_vis'> <input type='text' class='col-md-3' id='resultado' > <input type='button' class='col-md-1' id='abs_enviar' value='Enviar'></div>";
		$("#abs_content").append(div_borda+ div_n1+div_op+div_n2+div_r);
}

function calcular() {
	alert(n1+n2);
	resultado_correto = n1+n2;
	if($("#resultado").val() == resultado_correto){
		alert("yeay");
		$("#mensagem").text("Acertou");
	}else{
		$("#mensagem").text("Errou");
		alert("errou");
	}
		
}