CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
	sur_name VARCHAR(255),
	email VARCHAR(255)
);

INSERT INTO client (name, sur_name, email)
VALUES
('Franco', 'A', 'FrancoA@gmail.com'),
('Bruno', 'B', 'BrunoB@gmail.com'),
('Enzo', 'C', 'EnzoC@gmail.com'),
('Yazmin', 'D', 'YazminD@gmail.com'),
('Leandro', 'E', 'LeandroE@gmail.com'),
('Tomas', 'F', 'TomasF@gmail.com'),
('Ignacio', 'G', 'IgnacioG@gmail.com'),
('Giorgio', 'H', 'GiorgioH@gmail.com'),
('Sebastian', 'I', 'SebastianI@gmail.com'),
('German', 'J', 'GermanJ@gmail.com');
