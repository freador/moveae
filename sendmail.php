<?php


$nome = $_POST['nome'];

$email = $_POST['email'];

$msg = $_POST['msg'];



$email_destino="contato@moveae.com.br";

$mensagem = "Nome: ".$nome." \nEmail: ".$email." \n Mensagem: ".$msg." \n";

$msg_reply = "Olá  ".$nome."\n\nA mensagem enviada foi:\n".$mensagem."\nObrigado por entrar em contato conosco. Responderemos o mais rápido possivel.!\n\nEsta é uma mensagem automática de confirmação.\n\nPor Favor não responda este e-mail.\n";

if(mail($email_destino, "Contato Mova ae",$mensagem, "From:$nome<$email>")){

mail("$nome<$email>", "Seu contato foi enviado!", $msg_reply,  $headers);

echo "Email Enviado";

}else{echo "email não enviado \n utilize o contato@fellipeguimaraes.com.br";

}



?>