var changeLanguage = function(){
	var array = ["correr", "andar de bike", "jogar futebol", "skate"];
	var i = 1;
	setInterval(function(){
		$('.changeLanguage').text(array[i]);
		i++
		if (i == array.length){
			i=0
		}
	},1500)
	
}

var pluginMask = function(){
	// $('.datetime').mask('00/00/0000 00:00:00');
	// $('.cep').mask('00000-000');
}

var selectBox = function(){
	$('.box-select .dropdown-menu li a').livequery('click', function(){
		$('.box-select .activity').text($(this).data('val'))
	});
}

var callPlugins = function(){
	pluginMask();	
}

$(document).ready(function(){
	changeLanguage();
	callPlugins();
	selectBox();
})