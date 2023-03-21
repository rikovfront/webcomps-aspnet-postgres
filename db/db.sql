CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  created_on TIMESTAMP DEFAULT NOW(),
  updated_on TIMESTAMP DEFAULT NOW()
);

INSERT INTO Users (name, last_name) VALUES ('Иван', 'Иванов');
INSERT INTO Users (name, last_name) VALUES ('Петр', 'Петров');