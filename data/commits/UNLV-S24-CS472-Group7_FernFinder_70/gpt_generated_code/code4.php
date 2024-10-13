<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=database_name", "user", "pass");
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("SELECT `id`, `username`, `password` FROM `whatever`");
    $stmt->execute();

    while ($class = $stmt->fetchObject("YourClassNameHere")) {
        // $class now holds an object of type YourClassNameHere
        // With all properties set properly.
    }
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}