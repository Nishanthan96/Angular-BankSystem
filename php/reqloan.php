//(P x I) x ((1 + r)n)/ (t x ((1 + r)n)- 1)
<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$accountno = trim($request->accountno);
$reqloantype = trim($request->reqloantype);
$reqloanamount= trim($request->reqloanamount);
$reqdate = trim($request->reqdate);


$sql = "INSERT INTO loanrequest(accountno,reqloantype,reqloanamount,reqdate) VALUES ('$accountno','$reqloantype','$reqloanamount','$reqdate')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'accountno' => $accountno,
'reqloantype' => $reqloantype,
'reqloanamount' => $reqloanamount,
'reqdate' => $reqdate,
'reqno' => mysqli_insert_reqno($mysqli)

];
echo json_encode($authdata);
}
}

?>
