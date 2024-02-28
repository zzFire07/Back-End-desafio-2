CREATE TABLE success_case (
  id serial PRIMARY KEY,
  title VARCHAR(255),
  client_id INT,
  industry_id INT,
  project_type_id INT,
  start_date DATE,
  finish_date DATE,
  contact_id INT,
  offering_id INT,
  team_size INT, -- Nótese que este es un valor, no una FK.
  case_details_id INT,
  technologies_id INT,
  improvements_id INT,
  challenges_id INT,
  FOREIGN KEY(client_id) REFERENCES client(id),
  FOREIGN KEY(industry_id) REFERENCES industry(id),
  FOREIGN KEY(project_type_id) REFERENCES project_type(id),
  FOREIGN KEY(contact_id) REFERENCES contact(id),
  FOREIGN KEY(offering_id) REFERENCES offering(id),
  FOREIGN KEY(case_details_id) REFERENCES case_details(id),
  FOREIGN KEY(technologies_id) REFERENCES technologies(id),
  FOREIGN KEY(improvements_id) REFERENCES improvements(id),
  FOREIGN KEY(challenges_id) REFERENCES challenges(id)
);

INSERT INTO success_case (title, client_id, industry_id, project_type_id, start_date, finish_date, contact_id, offering_id, team_size, case_details_id, technologies_id, improvements_id, challenges_id)
VALUES
('Caso 1', 1, 1, 1, '2023-01-01', '2023-02-01', 1, 1, 10, 1, 1, 1, 1),
('Caso 2', 2, 2, 2, '2023-02-01', '2023-03-01', 2, 2, 20, 2, 2, 2, 2),
('Caso 3', 3, 3, 3, '2023-03-01', '2023-04-01', 3, 3, 30, 3, 3, 3, 3),
('Caso 4', 4, 4, 4, '2023-04-01', '2023-05-01', 4, 4, 40, 4, 4, 4, 4),
('Caso 5', 5, 5, 5, '2023-05-01', '2023-06-01', 5, 5, 50, 5, 5, 5, 5),
('Caso 6', 6, 6, 6, '2023-06-01', '2023-07-01', 6, 6, 60, 6, 6, 6, 6),
('Caso 7', 7, 7, 7, '2023-07-01', '2023-08-01', 7, 7, 70, 7, 7, 7, 7),
('Caso 8', 8, 8, 8, '2023-08-01', '2023-09-01', 8, 8, 80, 8, 8, 8, 8),
('Caso 9', 9, 9, 9, '2023-09-01', '2023-10-01', 9, 9, 90, 9, 9, 9, 9),
('Caso 10', 10, 10, 10, '2023-10-01', '2023-11-01', 10, 10, 100, 10, 10, 10, 10);
