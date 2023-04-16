<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "music_user";

$con = mysqli_connect($servername, $username, $password, $dbname);

if (!$con) {
    die ("Connection Failed: " . mysql_connect_error());
} 

// else {
//     echo "Database Successfully Connected";
// }

?>