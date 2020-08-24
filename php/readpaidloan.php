<?php
require 'database.php';
$paidinstallment = [];

$sql = "SELECT * FROM paidinstallment";
if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$paidinstallment[$i]['accountno'] = $row['accountno'];
		$paidinstallment[$i]['loanID'] = $row['loanID'];
		$paidinstallment[$i]['payamount'] = $row['payamount'];
		$paidinstallment[$i]['nextpaydate'] = $row['nextpaydate'];
		$paidinstallment[$i]['remainingmonths'] = $row['remainingmonths'];
		$i++;
	}
	echo json_encode($paidinstallment);
}
else
{
	http_response_code(404);
}
