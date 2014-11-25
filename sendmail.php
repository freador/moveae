<?php


$nome = $_POST['name'];

$email = $_POST['email'];

$act = $_POST['activity'];

$datetime = $_POST['datatime'];

$cep = $_POST['cep'];


$email_destino="freador@gmail.com";

$mensagem = "Nome: ".$nome." \nEmail: ".$email." \n Atividade: ".$act." \n Data & Hora:".$datetime."\n Bairro onde mora:".$cep."\n";

$msg_reply = "Olá  ".$nome."\n\nA mensagem enviada foi enviada com sucesso.\nObrigado por entrar em contato conosco. Responderemos o mais rápido possivel.!\n\nEsta é uma mensagem automática de confirmação.\n\nPor Favor não responda este e-mail.\n";

if(mail($email_destino, "Contato Mova ae",$mensagem, "From:$nome<$email>")){

if ( $act != nil &&  $datetime != nil && $cep != nil){
	mail("$nome<$email>", "Seu contato foi enviado!", $msg_reply,  $headers);
}

echo "Email Enviado";

}else{echo "email não enviado \n utilize o contato@moveae.com.br";

}



?>