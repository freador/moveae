var changeLanguage = function(){
	var array = ["correr", "andar de bike", "jogar futebol", "skate"];
	var i = 1;
	setInterval(function(){
		$('.changeLanguage').text(array[i]);
		i++
		if (i == array.length){
			i=0
		}
	},1000)
	
}

var pluginMask = function(){
	$('.datetime').mask('00/00/0000 00:00:00');
	$('.cep').mask('00000-000');
}

var callPlugins = function(){
	pluginMask();	
}

$(document).ready(function(){
	changeLanguage();
	callPlugins();
})