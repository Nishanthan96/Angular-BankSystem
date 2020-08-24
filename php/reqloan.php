<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$reqloantype = trim($request->reqloantype);
$reqloanamount= trim($request->reqloanamount);
$reqdate = trim($request->reqdate);

$vb = "SELECT accountno FROM cuslogged ORDER BY loggedno DESC LIMIT 1"  ;
$aaa = mysqli_query($mysqli, $vb);
while($bbb = $aaa->fetch_assoc())
   $accountno = (int)$bbb["accountno"];

$ids = "SELECT shareID FROM createsavings WHERE accountno = '$accountno'"  ;
$idsh = mysqli_query($mysqli, $ids);
while($idshare = $idsh->fetch_assoc())
   $shareID = $idshare["shareID"];

$sh = "SELECT balanceshare FROM createshare WHERE shareID = '$shareID'"  ;
$share = mysqli_query($mysqli, $sh);
while($shareb = $share->fetch_assoc())
   $balanceshare = (int)$shareb["balanceshare"];

$gp = "SELECT balancegp FROM groupacc WHERE accountno1 = '$accountno' OR accountno2 ='$accountno' OR accountno3 ='$accountno' OR accountno4 = '$accountno'"  ;
$gpb = mysqli_query($mysqli, $gp);
while($gpba= $gpb->fetch_assoc())
   $balancegp = (int)$gpba["balancegp"];

$sharedb = (0.1 * $loanamount);
$gpdb = (0.25 * $loanamount);

if($balanceshare > $sharedb AND $balancegp > $gpba )
$sql = "INSERT INTO loanrequest(accountno,reqloantype,reqloanamount,reqdate,status) VALUES ('$accountno','$reqloantype','$reqloanamount','$reqdate','Requested')";

if ($mysqli->query($sql) === TRUE) {
$authdata = [
'accountno' => $accountno,
'reqloantype' => $reqloantype,
'reqloanamount' => $reqloanamount,
'reqdate' => $reqdate,
'status' => 'Requested',
'reqno' => mysqli_insert_reqno($mysqli)

];
echo json_encode($authdata);
}
}

?>
