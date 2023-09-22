<?php 
include_once 'connection.php';
?>
<?php 
$P_ID = $_GET['delete'];

$delete = "DELETE FROM coursedata WHERE id='$P_ID'";
mysqli_query($conn, $delete);
header('location: all_blog.php');



?>