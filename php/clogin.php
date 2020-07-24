<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$usernamec = mysqli_real_escape_string($mysqli, trim($request->usernamec));
$passwordc = mysqli_real_escape_string($mysqli, trim($request->passwordc));
$sql = "SELECT * FROM customerlog where usernamec='$usernamec' and passwordc='$passwordc'";
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
