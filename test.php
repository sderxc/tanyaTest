<?php
/**
 * Created by PhpStorm.
 * User: 1
 * Date: 17.11.14
 * Time: 15:26
 */

$params = $_GET;

header('Content-Type: application/json');
if (isset($params['name'])){
    echo json_encode(array('name' => $params['name']));
} else {
    echo json_encode(array('err' => 1));
}