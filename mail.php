<?

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'UTF-8';
$name = $_POST['name'];
$tel = $_POST['tel'];

$message = "
<h2>Поступил заказ на звонок с сайта Blanchard</h2>
<b>Имя клиента:</b>$name<br>
<b>Телефон клиента:$tel</b>
";

$mail->setFrom('adm@varaeff.tmweb.ru', 'Blanchard');
$mail->addAddress('status82@inbox.ru');
$mail->Subject = 'Заказ обратного звонка Blanchard';
$mail->msgHTML($message);
$mail->send();
?>
