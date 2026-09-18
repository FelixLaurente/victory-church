CREATE DATABASE IF NOT EXISTS victory_church;
USE victory_church;

CREATE TABLE IF NOT EXISTS sermons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  scripture VARCHAR(200),
  speaker VARCHAR(200),
  video_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  event_date DATETIME NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ministries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(200) NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(200) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO sermons (title, scripture, speaker)
SELECT 'Walking by Faith', '2 Corinthians 5:7', 'Victory Church'
WHERE NOT EXISTS (SELECT 1 FROM sermons WHERE title='Walking by Faith');

INSERT INTO sermons (title, scripture, speaker)
SELECT 'Faith That Moves Forward', 'Hebrews 11:1', 'Victory Church'
WHERE NOT EXISTS (SELECT 1 FROM sermons WHERE title='Faith That Moves Forward');

INSERT INTO sermons (title, scripture, speaker)
SELECT 'Serve With Purpose', '1 Corinthians 15:58', 'Victory Church'
WHERE NOT EXISTS (SELECT 1 FROM sermons WHERE title='Serve With Purpose');
