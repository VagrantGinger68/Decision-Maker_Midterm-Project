DROP TABLE IF EXISTS polls CASCADE;

CREATE TABLE polls (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  question TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
