<?php 
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: *"); 
header("Access-Control-Allow-Headers: *");
$name = $_POST["name"];
$location = $_POST["location"];
echo "[\"<p>Your name is: ".$name."</p>\",\"<p>...and you came from: ".$location."</p>\"]";
?>