<?php

include "config.php";

$type = $_POST['type'];

if($type==1){
    $searchText = $_POST['search'];

    $sql = "SELECT id,name FROM user where name like '%".$searchText."%' order by name asc limit 5";
    
    $result = mysqli_query($con,$sql);

    while($fetch = mysqli_fetch_assoc(result)){
        $id = $fetch['id'];
        $name = $fetch['name'];

        $search_arr[] = array("id" => $id, "name" => $name);
    }

    echo json_encode($search_arr);
}

if(type == 2){
    $userid = $_POST['userid'];

    $sql = "SELECT username, email FROM user where id=".$userid;

    $result = mysqli_query($con,$sql);

    
    $return_arr = array();
    while($fetch = mysqli_fetch_assoc($result)){
        $username = $fetch['username'];
        $email = $fetch['email'];

        $return_arr[] = array("username"=>$username, "email"=> $email);
    }

    echo json_encode($return_arr);
}

?>
