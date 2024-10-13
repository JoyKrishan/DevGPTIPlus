CREATE TABLE content_type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    typeName VARCHAR(50),
    schemaDefinition JSON, -- Stores user-defined schema for this content type, e.g., fields, validation rules
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);