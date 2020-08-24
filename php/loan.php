<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$accountno = trim((int)$request->accountno);
$loanID = trim($request->loanID);
$loantype = trim($request->loantype);
$loanamount = trim((int)$request->loanamount);
$loanduration = trim((int)$request->loanduration);
$createdate = trim($request->createdate);
$startdate = trim($request->startdate);
$nextdate = trim($request->nextdate);

$installment = (($loanamount*(10/100))*((1+0.08)*$loanduration))/((1+0.08)*($loanduration-1));

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
$sql = "INSERT INTO loan(accountno,loanID,loantype,loanamount,loanduration,installment,createdate,startdate,nextdate) VALUES ('$accountno','$loanID','$loantype','$loanamount','$loanduration','$installment','$createdate','$startdate','$nextdate')";


if ($mysqli->query($sql) === TRUE) {
$authdata = [
'accountno' => $accountno,
'loanID' => $loanID,
'loantype' => $loantype,
'loanamount' => $loanamount,
'loanduration' => $loanduration,
'installment' => $installment,
'createdate' => $createdate,
'startdate' => $startdate,
'nextdate' => $nextdate
];
echo json_encode($authdata);
}
}

?>
