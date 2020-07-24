<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$usernamee = mysqli_real_escape_string($mysqli, trim($request->usernamee));
$epassword = mysqli_real_escape_string($mysqli, trim($request->epassword));
$sql = "SELECT * FROM employeelog where usernamee='$usernamee' and epassword='$epassword'";
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
