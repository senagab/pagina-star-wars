


var httpClient = new XMLHttpRequest();
var resposta;
httpClient.open('GET','https://swapi.co/api/films/');
httpClient.send();
httpClient.onreadystatechange = function(){
	if(httpClient.readyState == 4) { //&& httpClient.status == 200
		var divFilmes = document.querySelector("#filmes");
		resposta = JSON.parse(httpClient.responseText);
		var htmlFilmes = "";

		for (var i=0; i<resposta.results.length;i++){
			htmlFilmes += resposta.results[i].title + "<br/>"
		}

		divFilmes.innerHTML = htmlFilmes
	}
}

var httpClient2 = new XMLHttpRequest();
var resposta2;
httpClient2.open ('GET','https://swapi.co/api/people/');
httpClient2.send();
httpClient2.onreadystatechange = function () {
	if(httpClient2.readyState == 4) {
		var divPersonagens = document.querySelector("#personagens");
		resposta2 = JSON.parse(httpClient2.responseText);
		var htmlPersonagens = "";

		for (var i=0; i<resposta2.results.length;i++){
			htmlPersonagens += resposta2.results[i].name + "<br/>"
		}

		divPersonagens.innerHTML = htmlPersonagens
	}
}

var httpClient3 = new XMLHttpRequest();
var resposta3;
httpClient3.open('GET','https://swapi.co/api/planets/');
httpClient3.send();
httpClient3.onreadystatechange = function(){
	if(httpClient3.readyState == 4) {
		var divPlanetas = document.querySelector("#planetas");
		resposta3 = JSON.parse(httpClient3.responseText);
		var htmlPlanetas = "";

		for(var i=0; i<resposta3.results.length;i++){
			htmlPlanetas += resposta3.results[i].name + "<br/>"
		}

		divPlanetas.innerHTML = htmlPlanetas
	}
}


/* var titulo = new Titulo;

titulo.map(function(titulo) {
	return titulo.length;
})

function Req (){
	this.filme = 0;

	setInterval(function growUp() {
		this.filme++;
	}, 1000);
}

var f = new Req(); */


