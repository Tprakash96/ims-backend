CREATE TABLE IF NOT EXISTS users(userId VARCHAR(40) UNIQUE NOT NULL, email VARCHAR(40) UNIQUE NOT NULL, password VARCHAR(16) NOT NULL);