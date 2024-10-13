   $stmt = $pdo->prepare("SELECT `id`, `username`, `password` FROM `whatever`");
   $stmt->execute();