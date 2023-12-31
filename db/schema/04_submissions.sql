DROP TABLE IF EXISTS submissions CASCADE;

CREATE TABLE submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  poll_id VARCHAR(255) REFERENCES polls(id) ON DELETE CASCADE,
  time_submitted TIMESTAMP,
  points INTEGER ARRAY NOT NULL,
  user_name VARCHAR(255) DEFAULT 'Anonymous'
);
