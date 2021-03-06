<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Legal Clinic</title>
    <link rel="stylesheet" href="css/all.min.css"  />
    <link href="css/bootstrap.min.css" rel="stylesheet" >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/css/intlTelInput.css" integrity="sha512-gxWow8Mo6q6pLa1XH/CcH8JyiSDEtiwJV78E+D+QP0EVasFs8wKXq16G8CLD4CJ2SnonHr4Lm/yY2fSI2+cbmw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/rome.css">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
   <!--thanks msg-->
   <section class="d-flex justify-content-center align-items-center" style="height: -webkit-fill-available;">
        <div class=" ">
	  <div class="">
		<div class="">
			<div class="thanks-wrap">
				<div class="checkmark">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.2 161.2">
						<circle class="path" fill="none" stroke="#28a745" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1"/>
						<path class="path" fill="none" stroke="#28a745" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" d="M113 52.8l-38.9 55.6-25.9-22"/>
						<circle class="spin" fill="none" stroke="#555555" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>
					</svg>
				</div>
				<h2 class="pt-5" style="color:#28a745;">تم التسجيل بنجاح</h2>
			</div>
		</div>
	</div>
</div>
</section>
    <script src="js/jquery.min.js" ></script>
    <script src="js/popper.min.js" ></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.16/js/intlTelInput.min.js" integrity="sha512-Po9nSdYOcWIcoADdRjkAbRYPpR8OHjxzA/3RDUERZcDewTLzRTxbG4bUX7Sr7lVEcO3wTCzphdOBWgNFKVmxaA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="js/rome.js"></script>
</body>
</html>

<?php
    require_once("header.php");
    require_once ("database.php");
    global $formdata;
    global $insert;
    $database_instance = Database::getInstance();
    $connection = $database_instance->getConnection();
    $formdata = array();
    if (isset($_POST['userid'])) {
        $formdata["userid"] = $_POST['userid'];
    }
   if (isset($_POST['company_type'])) {
    $company_radio = $_POST['company_type'];
    if ($company_radio == 'LimitedLiabilityCompany') {
        $formdata["company_type"] = "شركة ذات مسئولية محدودة";
    } elseif ($company_radio == 'JointStockIncorporation') {
        $formdata["company_type"]  = "شركة مساهمة مصري";
    } elseif ($company_radio == 'OPCrequirements') {
        $formdata["company_type"]  = "شركة شخص واحد ذات مسئولية محدودة";
    } elseif ($company_radio == 'SoleEntity') {
        $formdata["company_type"]  = "المنشاة الفردية";
    } elseif ($company_radio == 'Generalpartnership') {
        $formdata["company_type"]  = "شركة التضامن";
    } elseif ($company_radio == 'LimitedPartnership') {
        $formdata["company_type"]  = "شركة التوصية البسيطة";
    }
    }
    if (isset($_POST["company_name"])) {
        $formdata["company_name"] = json_encode($_POST["company_name"]);
    }
    if (isset($_POST["company_activity"])) {
        $formdata["company_activity"] = $_POST["company_activity"];
    }
    if (isset($_POST["company_address"])) {
        $formdata["company_address"] = $_POST["company_address"];
    }
    if (isset($_POST["capital_value"])) {
        $formdata["capital_value"] = $_POST["capital_value"];
    }
    if (isset($_POST["capital_share"])) {
        $formdata["capital_share"] = $_POST["capital_share"];
    }

    if (isset($_FILES["personal_id"]["name"])) {
        for ($i=0; $i <count($_FILES["personal_id"]["name"]) ; $i++) {   
        $formdata["personal_id"][$i] = $_FILES["personal_id"]["name"][$i];
        }
    }
    
    if (isset($_FILES['personal_id'])) {
        $counter = 0;
        foreach ($_FILES['personal_id']['tmp_name'] as $key => $tmp_name) {
            $file_name = $key . $_FILES['personal_id']['name'][$key];
            $file_size = $_FILES['personal_id']['size'][$key];
            $file_tmp = $_FILES['personal_id']['tmp_name'][$key];
            $file_type = $_FILES['personal_id']['type'][$key];
            move_uploaded_file($file_tmp, 'uploads/' . $file_name);
            $counter++;
        }
    }
    if (isset($_POST["shareholder_name"])) {
        for ($i=0; $i <count($_POST["shareholder_name"]) ; $i++) {   
        $formdata["shareholder_name"][$i] = $_POST["shareholder_name"][$i];
        }
    }
    if (isset($_POST["shareholder_nationality"])) {
        for ($i=0; $i <count($_POST["shareholder_nationality"]) ; $i++) {   
        $formdata["shareholder_nationality"][$i] =$_POST["shareholder_nationality"][$i];
        }
    }
    if (isset($_POST["shareholder_percentage"])) {
    for ($i=0; $i <count($_POST["shareholder_percentage"]) ; $i++) {
        if (empty($_POST["shareholder_percentage"][$i])){
            $formdata["shareholder_percentage"][$i] = 100;
        }
        $formdata["shareholder_percentage"][$i] = $_POST["shareholder_percentage"][$i];
     }
    }

    if (isset($_POST["manager_name"])) {
        for ($i=0; $i <count($_POST["manager_name"]) ; $i++) {   
            $formdata["manager_name"][$i] = $_POST["manager_name"][$i];
        }
    }
    if (isset($_POST["manager_nationality"])) {
        for ($i=0; $i <count($_POST["manager_nationality"]) ; $i++) {   
        $formdata["manager_nationality"][$i] = $_POST["manager_nationality"][$i];
        }
    }
    if (isset($_POST["perm1"])){
        for ($i=0; $i <count($_POST["perm1"]) ; $i++) {   
        $formdata["perm1"][$i] = $_POST["perm1"][$i];
        }
    }
    if(isset($_POST["perm2"])){   
        for ($i=0; $i <count($_POST["perm2"]) ; $i++) {   
        $formdata["perm2"][$i] = $_POST["perm2"][$i];
        }
    }
    if(isset($_POST["perm3"])){  
        for ($i=0; $i <count($_POST["perm3"]) ; $i++) {   
        $formdata["perm3"][$i] = $_POST["perm3"][$i];
        }
    }

    if (isset($_POST["manager_type"])) {
        for ($i=0; $i <count($_POST["manager_type"]) ; $i++) {   
        $formdata["manager_type"][$i] = $_POST["manager_type"][$i];
        }
    }
    if (isset($_POST["signdate"])){
        $formdata["signdate"] = $_POST["signdate"];
        $update_date = "UPDATE `users` SET `date`='".$formdata["signdate"]."'WHERE `id`='".$formdata["userid"]."'";
        $result_date = $connection->query($update_date); 
    }
 
    $insert_company = "INSERT INTO `companies`(`company_type`,`company_name` , `company_address`, `company_activity`, `capital_value`, `capital_share`,`user_id`) VALUES ('".$formdata["company_type"]."','".$formdata["company_name"]."','".$formdata["company_address"]."','".$formdata["company_activity"]."','".$formdata["capital_value"]."','".$formdata["capital_share"]."','".$formdata["userid"]."')";
    $result1 = $connection->query($insert_company);  
    $formdata["company_id"] = $connection->insert_id;
    if (empty($formdata["shareholder_percentage"])) {
        for ($i=0; $i < count($_POST["shareholder_name"]) ; $i++) { 
        $insert .= "INSERT INTO `shareholders`(`name`,`nationality`, `personal_id`,`company_id`) VALUES ('".$formdata["shareholder_name"][$i]."','".$formdata["shareholder_nationality"][$i]."','".$formdata["personal_id"][$i]."','".$formdata["company_id"]."');";
        // $result_insert = $connection->query($insert_shareholder);
        } 
    }else{
        for ($i=0; $i < count($_POST["shareholder_name"]) ; $i++) { 
            $insert  .= "INSERT INTO `shareholders`(`name`,`nationality` , `percenatage`, `personal_id`,`company_id`) VALUES ('".$formdata["shareholder_name"][$i]."','".$formdata["shareholder_nationality"][$i]."','".$formdata["shareholder_percentage"][$i]."','".$formdata["personal_id"][$i]."','".$formdata["company_id"]."');";
            // $result_insert = $connection->query($insert_shareholder); 
        }
    }
    if(empty($formdata["perm1"])||empty($formdata["perm2"])||empty($formdata["perm3"])||empty($formdata["manager_type"])){
        for ($i=0; $i < count($_POST["manager_name"]) ; $i++) {
        $insert .= "INSERT INTO `managers`(`name`,`nationality` , `personal_id`,`company_id`) VALUES ('".$formdata["manager_name"][$i]."','".$formdata["manager_nationality"][$i]."','".$formdata["personal_id"][$i]."','".$formdata["company_id"]."');";
        // $result_insert = $connection->query($insert_maneger); 
        }
    }else{
    for ($i=0; $i < count($_POST["manager_name"]) ; $i++) {
        $insert .= "INSERT INTO `managers`(`name`,`nationality` , `personal_id`,`perm1`,`perm2`,`perm3`,`manager_type`,`company_id`) VALUES ('".$formdata["manager_name"][$i]."','".$formdata["manager_nationality"][$i]."','".$formdata["personal_id"][$i]."','".$formdata["perm1"][$i]."','".$formdata["perm2"][$i]."','".$formdata["perm3"][$i]."','".$formdata["manager_type"][$i]."','".$formdata["company_id"]."')";
        // $result_insert = $connection->query($insert_maneger); 
    }
}
    //multi query for insert data
    $result = $connection->multi_query($insert);
    $database_instance->destructConnection();
?>