<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "content";

$con = mysqli_connect($host, $user, $password,$dbname);
if(!$con) {
    die("Connection Failed: " . mysqli_connect_error());
}