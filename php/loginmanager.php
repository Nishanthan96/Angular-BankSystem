<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$usernamem = mysqli_real_escape_string($mysqli, trim($request->usernamem));
$passwordm = mysqli_real_escape_string($mysqli, trim($request->passwordm));
$sql = "SELECT * FROM managerlog where usernamem='$usernamem' and passwordm='$passwordm'";
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
?>
