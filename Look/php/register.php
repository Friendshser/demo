<?php

header("Content-Type:application/json;charset=utf-8");

$conn = new PDO('mysql:host=localhost;dbname=rankingtow;charset=utf8', 'root', '', [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
// $con = mysql_connect("localhost",'root','password');
// $select_db = mysql_select_db('test')
// $db  = new PDO('mysql:localhost;dbname = ranking;charset = utf8','root','password');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	$name = $_POST['name'] ?? null;
	$time = $_POST['time'] ?? null;
	$score = $_POST['score'] ?? null;
	$difficulty = $_POST['difficulty'] ?? null;

	if (empty($name)) {
		echo json_encode(['error' => 'Name field cannot be blank.']);
		return;
	}

	if (empty($time) && $time != '0') {
		echo json_encode(['error' => 'Time field cannot be blank.']);
		return;
	}

	if (empty($score) && $score != '0') {
		echo json_encode(['error' => 'Score field cannot be blank.']);
		return;
	}

	if (empty($difficulty)) {
		echo json_encode(['error' => 'Difficulty field cannot be blank.']);
		return;
	}

	if (!ctype_digit($time)) {
		echo json_encode(['error' => 'Time field must be an integer.']);
		return;
	}

	if (!ctype_digit($score)) {
		echo json_encode(['error' => 'Score field must be an integer.']);
		return;
	}

	$stmtInsert = $conn->prepare('INSERT INTO ranking (name, time, score, difficulty) VALUES (?, ?, ?, ?)');
	$stmtInsert->execute([$name, $time, $score, $difficulty]);
}


$stmtSelect = $conn->query('SELECT * FROM ranking');
$ranking = $stmtSelect->fetchAll();
echo json_encode($ranking);


//插入：insert into tabl1(对应的字段)) values(对应的值))；
//查询：select * from table1;
//更新：update table1 set 修改的字段：修改的值；
//选择：select * from table1 where 范围；


