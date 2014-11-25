var changeLanguage = function(){
	var array = ["correr", "andar de bike", "jogar futebol", "andar de skate"];
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

var changeBox = function(){
	$('.step-2').livequery('click', function(){
		$('.email').val()
		if ( $('.nome').val().length < 5 ){
			alert('Digite seu Nome Completo');
		}else if ( $('.email').val().length < 12 ){
			alert('Digite seu E-mail');
		}else{

			$('.part-1').fadeOut();
			$('.part-2').fadeIn();

			// var request = $.ajax({
			//   url: "sendmail.php",
			//   type: "POST",
			//   data: { name: $('.nome').val(), email: $('.email').val() },
			// });			 
			// request.done(function( msg ) {
			//   console.log('nome e email enviado')
			// });

		}
	});

	$('.enviar').livequery('click', function(){

			var request = $.ajax({
			  url: "sendmail.php",
			  type: "POST",
			  data: { name: $('.nome').val(), email: $('.email').val(), activity: $('.activity').text(), datatime: $('.datetime').val(), cep: $('.cep').val() },
			  beforeSend: function() {
			   $('.enviar').after("<img src='imagens/ajax-loader.gif' class='gif' />");
			  },
			  success: function() {
			   $('.gif').hide()
			   alert("E-mail enviado com sucesso");
			  }
			});

		$(this).attr('disabled', 'disabled');


	})
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
	changeBox();
})