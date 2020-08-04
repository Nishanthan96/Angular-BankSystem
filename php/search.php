<?php
$search = $_POST['search'];
require 'database.php';
$sql = "SELECT * from createsavings where accountno like '%$search%'";

$result = $mysqli->query($sql);


if ($result->num_rows > 0){
while($row = $result->fetch_assoc() ){
	echo $row["shareID"]."  ".$row["groupID"]."<br>";
}
} else {
	echo "0 records";
}

$mysqli->close();

?>
