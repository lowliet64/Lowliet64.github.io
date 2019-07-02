

function search(){
	
	var t=document.getElementById("txt-busca").value.toLowerCase();
	if(t=="empada" || t=="empadas"){
		location.href="resultados.html";
	}
};


function desfavItem(){
	var favoritos=document.getElementById("listItensFavoritos");
	favoritos.innerHTML="";
	console.log("tmj");

};

function remItem(){
	var carrinho=document.getElementById("listItensCarrinhos");
	carrinho.innerHTML="";

};

function addItem(itemID){
	var item=document.getElementById(itemID).innerHTML;
	var carrinho=document.getElementById("listItensCarrinhos");
	
	
	carrinho.innerHTML="<div id='item-1'>\
						<img class='img-item' src='img/pesquisa/empadinha.jpg'>\
						<div class='desc'>\
							<h1>Empada de frango</h1>\
							<p>lore impsund aeodakeedoakdoaekdoak</p>\
							<p><i class='fas fa-phone'></i>Vendedor:Fulano da Silva Medeiros</p>\
							<p><i class='fas fa-user-tie'></i>Contato: (99)99999-99999</p>\
						</div>\
						<div class='row' style='margin-top: 10px'>\
							<div class='col-md-12' id='opts'>\
								<button class='col-md-3 action btn btn-success' ><i class='fas fa-plus'></i>Adicionar</button>\
								<div class='col-md-1'></div>\
								<button class='col-md-3 action btn btn-warning'><i class='fas fa-star'></i>Favoritar</button>\
								<div class='col-md-1'></div>\
								<button class='col-md-3 action btn btn-danger' onclick='remItem()'><i class='fas fa-trash-alt'></i>Remover</button>\
							</div>\
						</div>\
					</div>;";

	var icone= document.getElementById("carrinhoDeCompras");
	icone.innerHTML="<div style='position:absolute;background:yellow;width:25px;height:25px;border-radius:15%'><p style='font-size:20px;text-align:center'>1</p></div>"+icone.innerHTML;
	

};



function favItem(){
	var favoritos=document.getElementById("listItensFavoritos");
	
	
	favoritos.innerHTML="<div id='item-1'>\
						<img class='img-item' src='img/pesquisa/empadinha.jpg'>\
						<div class='desc'>\
							<h1>Empada de frango</h1>\
							<p>lore impsund aeodakeedoakdoaekdoak</p>\
							<p><i class='fas fa-phone'></i>Vendedor:Fulano da Silva Medeiros</p>\
							<p><i class='fas fa-user-tie'></i>Contato: (99)99999-99999</p>\
						</div>\
						<div class='row' style='margin-top: 10px'>\
							<div class='col-md-12' id='opts'>\
								<button class='col-md-3 action btn btn-success' ><i class='fas fa-plus'></i>Adicionar</button>\
								<div class='col-md-1'></div>\
								<button class='col-md-3 action btn btn-danger' onclick='desfavItem()'><i class='fas fa-trash-alt' '></i>Remover</button>\
							</div>\
						</div>\
					</div>;"


var icone= document.getElementById("favoritosLista");
	icone.innerHTML="<div style='position:absolute;background:yellow;width:25px;height:25px;border-radius:15%'><p style='font-size:20px;text-align:center'>1</p></div>"+icone.innerHTML;
	

	
};


