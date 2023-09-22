<?php 
	$conn=mysqli_connect("localhost","root","","mobile_mall");
	if(!$conn){
		echo mysqli_connect_error();
		exit();
	}

    
	if(!empty($_REQUEST['action'])){
		$arr=[];
		if($_REQUEST['action']=="list_user"){
			if(!empty($_REQUEST['mobilname'])){
				$q=mysqli_query($conn,"SELECT * FROM mobilepic WHERE mobilename='$_REQUEST[mobilename]'");
			}else{
				$q=mysqli_query($dbc,"SELECT * FROM mobilepic");
			}
			
			while($r=mysqli_fetch_assoc($q)){
				$arr[]=$r;
			}
			$json=[
				"status"=>"success",
				"data"=>$arr,
				"action"=>$_REQUEST['action'],
			];
		}
	}else{
		$json=[
				"status"=>"fail",
				"data"=>[],
				"action"=>"invalid action",
			];
	}




	echo json_encode($json);
 ?>