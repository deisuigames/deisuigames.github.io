<?php
/*
**　Javascriptとして実行して下記のデータを取得する
**　・IPアドレス
**　・日付
*/

$ipaddress  = $_SERVER["REMOTE_ADDR"];
$accesstime = date("Y/m/d H:i:s");

?>

getIPAddress = function() {
  return '<?php echo $ipaddress; ?>';
}

getAccessTime = function() {
  return '<?php echo $accesstime; ?>';
}
