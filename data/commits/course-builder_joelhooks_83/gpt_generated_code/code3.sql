CREATE TABLE content_metadata (
    contentId VARCHAR(255) PRIMARY KEY,
    contentType VARCHAR(50),
    state ENUM('draft', 'published'),
    visibility ENUM('public', 'private', 'unlisted'),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -- Additional fields for content-specific metadata can be added as needed
);