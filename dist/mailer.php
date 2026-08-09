<?php
/**
 * XALY Mailer - PHP SMTP Script
 * Recibe datos del formulario y envia correo via SMTP de Hostinger
 * Subir este archivo a la raiz de xaly.mx en Hostinger
 */

// CORS Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metodo no permitido']);
    exit();
}

define('SMTP_HOST',     'smtp.hostinger.com');
define('SMTP_PORT',     465);
define('SMTP_USER',     'darigrul@xaly.mx');
define('SMTP_PASS',     'X@ly1984.');
define('MAIL_FROM',     'darigrul@xaly.mx');
define('MAIL_FROM_NAME','XALY Formulario');
define('MAIL_TO',       'contacto@xaly.mx');
define('MAIL_SUBJECT',  'NUEVO LEAD');

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'JSON invalido']);
    exit();
}

$nombre   = isset($data['nombre'])   ? htmlspecialchars(trim($data['nombre']))   : 'No especificado';
$empresa  = isset($data['empresa'])  ? htmlspecialchars(trim($data['empresa']))  : 'No especificado';
$email    = isset($data['email'])    ? htmlspecialchars(trim($data['email']))     : 'No especificado';
$telefono = isset($data['telefono']) ? htmlspecialchars(trim($data['telefono'])) : 'No especificado';
$mensaje  = isset($data['mensaje'])  ? htmlspecialchars(trim($data['mensaje']))  : 'Sin mensaje';

$body_html = "<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body style='font-family:Arial,sans-serif;background:#0b0e14;color:#fff;padding:30px;'><div style='max-width:600px;margin:0 auto;background:#141820;border-radius:16px;border:1px solid #00f0ff33;overflow:hidden;'><div style='background:linear-gradient(135deg,#00f0ff22,#ff575722);padding:30px;border-bottom:1px solid #00f0ff33;'><h1 style='margin:0;color:#00f0ff;font-size:28px;letter-spacing:4px;'>NUEVO LEAD</h1><p style='margin:8px 0 0;color:#aaa;font-size:14px;'>Recibido desde el formulario de XALY</p></div><div style='padding:30px;'><table style='width:100%;border-collapse:collapse;'><tr><td style='padding:12px 0;border-bottom:1px solid #ffffff11;color:#aaa;width:140px;font-size:13px;text-transform:uppercase;letter-spacing:1px;'>Nombre</td><td style='padding:12px 0;border-bottom:1px solid #ffffff11;color:#fff;font-size:16px;font-weight:bold;'>$nombre</td></tr><tr><td style='padding:12px 0;border-bottom:1px solid #ffffff11;color:#aaa;font-size:13px;text-transform:uppercase;letter-spacing:1px;'>Empresa</td><td style='padding:12px 0;border-bottom:1px solid #ffffff11;color:#fff;font-size:16px;'>$empresa</td></tr><tr><td style='padding:12px 0;border-bottom:1px solid #ffffff11;color:#aaa;font-size:13px;text-transform:uppercase;letter-spacing:1px;'>Email</td><td style='padding:12px 0;border-bottom:1px solid #ffffff11;color:#00f0ff;font-size:16px;'><a href='mailto:$email' style='color:#00f0ff;text-decoration:none;'>$email</a></td></tr><tr><td style='padding:12px 0;border-bottom:1px solid #ffffff11;color:#aaa;font-size:13px;text-transform:uppercase;letter-spacing:1px;'>Telefono</td><td style='padding:12px 0;border-bottom:1px solid #ffffff11;color:#fff;font-size:16px;'>$telefono</td></tr><tr><td style='padding:12px 0;color:#aaa;font-size:13px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;'>Mensaje</td><td style='padding:12px 0;color:#ccc;font-size:15px;line-height:1.6;'>$mensaje</td></tr></table></div><div style='padding:20px 30px;background:#0b0e14;border-top:1px solid #ffffff11;'><p style='margin:0;color:#555;font-size:12px;'>Generado automaticamente por xaly.mx</p></div></div></body></html>";

function smtp_send($host, $port, $user, $pass, $from, $from_name, $to, $subject, $html_body) {
    $context = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true]]);
    $socket = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) throw new Exception("No se pudo conectar: {$errstr} ({$errno})");
    stream_set_timeout($socket, 15);
    $r = function() use ($socket) { $d=''; while($l=fgets($socket,515)){$d.=$l;if(substr($l,3,1)===' ')break;} return $d; };
    $w = function($c) use ($socket) { fwrite($socket, $c."\r\n"); };
    $r();
    $w("EHLO xaly.mx"); $r();
    $w("AUTH LOGIN"); $r();
    $w(base64_encode($user)); $r();
    $w(base64_encode($pass)); $resp = $r();
    if (strpos($resp,'235')===false) { fclose($socket); throw new Exception("Auth fallida: {$resp}"); }
    $w("MAIL FROM: <{$from}>"); $r();
    $w("RCPT TO: <{$to}>"); $r();
    $w("DATA"); $r();
    $headers  = "From: =?UTF-8?B?".base64_encode($from_name)."?= <{$from}>\r\n";
    $headers .= "To: {$to}\r\nSubject: =?UTF-8?B?".base64_encode($subject)."?=\r\n";
    $headers .= "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\nDate: ".date('r')."\r\n";
    $encoded  = chunk_split(base64_encode($html_body));
    $w($headers."\r\n".$encoded."\r\n."); $resp2 = $r();
    $w("QUIT"); fclose($socket);
    if (strpos($resp2,'250')===false) throw new Exception("Rechazo: {$resp2}");
    return true;
}

try {
    smtp_send(SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_FROM_NAME, MAIL_TO, MAIL_SUBJECT, $body_html);
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Correo enviado']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
