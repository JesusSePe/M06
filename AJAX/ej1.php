<?php
/*if( $_SERVER["REQUEST_METHOD"] == "GET") {
    print_r($_GET);
}*/

if( $_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["num"])) {
        $prime = 'TRUE';
        $num = $_GET["num"];
        for ($index = 1; $index <= $num; $index++){
            if ($num % $index == 0 && $num != $index && $index != 1) {
                $prime = 'FALSE';
            }
        }
        echo $prime;
    }
}
?>
