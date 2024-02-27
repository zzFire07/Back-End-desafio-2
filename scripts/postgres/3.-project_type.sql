CREATE TABLE project_type (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO project_type (id, name)
VALUES
(1, 'Mobile Development'),
(2, 'Web Development'),
(3, 'Software Development'),
(4, 'Development'),
(5, 'Refactory'),
(6, 'Migration'),
(7, 'Integration'),
(8, 'Networking'),
(9, 'Database Management'),
(10, 'Emergency Recovery');