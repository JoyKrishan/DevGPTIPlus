<?php

try {
    // Establish a connection to the MySQL database
    $pdo = new PDO("mysql:host=localhost;dbname=database_name", "user", "pass");

    // Disable the emulation of prepared statements and enable error mode
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare and execute the SELECT query
    $stmt = $pdo->prepare("SELECT `id`, `username`, `password` FROM `whatever`");
    $stmt->execute();

    // Fetch rows and create objects of type YourClassNameHere
    while ($class = $stmt->fetchObject("YourClassNameHere")) {
        // $class now holds an object of type YourClassNameHere
        // With all properties set properly.
    }
} catch (PDOException $e) {
    // Handle any exceptions that may occur during database operations
    die("Error: " . $e->getMessage());
}