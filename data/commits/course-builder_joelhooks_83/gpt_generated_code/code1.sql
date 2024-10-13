-- Users Table
CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    emailVerified TIMESTAMP(3),
    image VARCHAR(255),
    createdAt TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP(3),
    INDEX email_idx (email)
);

-- Roles Table
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- User Roles Junction Table
CREATE TABLE user_roles (
    userId VARCHAR(255),
    roleId INT,
    PRIMARY KEY (userId, roleId),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (roleId) REFERENCES roles(id)
);

-- Content Types Table
CREATE TABLE content_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    schemaDefinition JSON NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contribution Types Table
CREATE TABLE contribution_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Permission Types Table
CREATE TABLE permission_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Content Metadata Table
CREATE TABLE content_metadata (
    contentId VARCHAR(255) PRIMARY KEY,
    typeId INT,
    title VARCHAR(255),
    state ENUM('draft', 'published'),
    visibility ENUM('public', 'private', 'unlisted'),
    resources JSON,
    body TEXT,
    createdBy VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedBy VARCHAR(255),
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (createdBy) REFERENCES users(id),
    FOREIGN KEY (updatedBy) REFERENCES users(id),
    FOREIGN KEY (typeId) REFERENCES content_types(id)
);

-- Contributions Table
CREATE TABLE contributions (
    contentId VARCHAR(255),
    userId VARCHAR(255),
    contributionTypeId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (contentId, userId, contributionTypeId),
    FOREIGN KEY (contentId) REFERENCES content_metadata(contentId),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (contributionTypeId) REFERENCES contribution_types(id)
);

-- Permissions Table
CREATE TABLE permissions (
    userId VARCHAR(255),
    contentId VARCHAR(255),
    permissionTypeId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (userId, contentId, permissionTypeId),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (contentId) REFERENCES content_metadata(contentId),
    FOREIGN KEY (permissionTypeId) REFERENCES permission_types(id)
);