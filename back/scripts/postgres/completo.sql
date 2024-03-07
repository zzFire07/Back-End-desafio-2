CREATE TABLE industry (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO industry (name)
VALUES
('Retail "Superstores"'),
('Banking'),
('Healthcare'),
('Entretainment'),
('Education'),
('Pharmaceutical'),
('Oil & Gas'),
('Green Energys'),
('Minery'),
('VideoGames');

CREATE TABLE offering (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
);
INSERT INTO offering (name, description)
VALUES
('Modernization', 'Modernize a software to improve performance'),
('Restructuring', 'Restructure a software to change technologies');


CREATE TABLE project_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO project_type (name)
VALUES
('Mobile Development'),
('Web Development'),
('Software Development'),
('Development'),
('Refactory'),
('Migration'),
('Integration'),
('Networking'),
('Database Management'),
('Emergency Recovery');

CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
	  surname VARCHAR(255),
    email VARCHAR(255) 
);

INSERT INTO client (name, email)
VALUES
('Google', 'Avurish@Google.com'),
('Electronic Arts', 'MeganF@EA.com'),
('NatGeo', 'Julieta@NatGeo.com'),
('Southwest Airlines', 'AlanJus@SWAirlines.com'),
('Coca Cola', 'ImirAhdul@Pepsico.com'),
('IBM', 'Sebastian@IBM.com');

CREATE TABLE contact (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    sur_name VARCHAR(255),
	email VARCHAR(255)
);
INSERT INTO contact (name, sur_name, email)
VALUES
('German', 'A', 'GermanA@gmail.com'),
('Nicolas', 'B', 'NicolasB@gmail.com'),
('Matias', 'C', 'MatiasC@gmail.com'),
('Agustin', 'D', 'AgustinD@gmail.com'),
('Facundo', 'E', 'FacundoE@gmail.com'),
('Agustina', 'F', 'AgustinaF@gmail.com'),
('Romina', 'G', 'RominaG@gmail.com'),
('Brisa', 'H', 'BrisaH@gmail.com'),
('Gimena', 'I', 'GimenaI@gmail.com'),
('Juan', 'J', 'JuanJ@gmail.com');

CREATE TABLE case_detail (
  id SERIAL PRIMARY KEY,
  image_detail TEXT,
  video_detail TEXT,
  text_detail TEXT
);

INSERT INTO case_detail (image_detail, video_detail, text_detail)
VALUES
('img.jpg', 'vid.mp4', 'This is a success case of EA. In this case the team elaborated a system that repaired (...)'),
('img.png', 'vid.mp4', 'This is a success case of NatGeo. In this case after conclude that the system was unestable (...)'),
('img.jpeg', 'vid.mp4', 'This is a success case of IBM. In this case the team worked to learn all the documentation about (...)');

CREATE TABLE technology (
  id SERIAL PRIMARY KEY,
  image_tech TEXT,
  video_tech TEXT,
  text_tech TEXT
);

INSERT INTO technology (image_tech, video_tech, text_tech)
VALUES
('img.jpg', 'vid.mp4', 'The technology used in this case was Java, the team used the latest version of Java to develop (...)'),
('img.png', 'vid.mp4', 'The technology used in this case was Python, the team used the latest version of Python to develop (...)'),
('img.jpeg', 'vid.mp4', 'The technology used in this case was C#, the team used the latest version of C# to develop (...)');

CREATE TABLE improvement (
  id SERIAL PRIMARY KEY,
  image_imp TEXT,
  video_imp TEXT,
  text_imp TEXT
);

INSERT INTO improvement (image_imp, video_imp, text_imp)
VALUES
('img.jpg', 'vid.mp4', 'The improvement in this case was the performance of the system, the team worked to improve the performance (...)'),
('img.png', 'vid.mp4', 'The improvement in this case was the stability of the system, the team worked to improve the stability (...)'),
('img.jpeg', 'vid.mp4', 'The improvement in this case was the documentation of the system, the team worked to improve the documentation (...)');
 

 CREATE TABLE challenge (
  id SERIAL PRIMARY KEY,
  image_ch TEXT,
  video_ch TEXT,
  text_ch TEXT
);

INSERT INTO challenge (image_ch, video_ch, text_ch)
VALUES
('img.jpg', 'vid.mp4', 'The challenge in this case was the project manager because he ask us every 10 minutes if we (...)'),
('img.png', 'vid.mp4', 'The challenge in this case was the testing team because they find all the bugs and the develop team cannot (...)'),
('img.jpeg', 'vid.mp4', 'The challenge in this case was the documentation of the system, the last documentation was the brain of the Team Lead (...)');

	CREATE TABLE successcase (
		id SERIAL PRIMARY KEY,
		title VARCHAR(255),
		startDate DATE,
		finishDate DATE,
		teamSize INT,
		isPublic BOOLEAN,
		industryId INT,
		clientId INT,
		projectTypeId INT,
		offeringId INT,
		technologyid INT,
		challengeid INT,
		improvementid INT,
		contactId INT,
		caseDetailsId INT,
		FOREIGN KEY (industryId) REFERENCES industry(id),
		FOREIGN KEY (clientId) REFERENCES client(id),
		FOREIGN KEY (projectTypeId) REFERENCES project_Type(id),
		FOREIGN KEY (contactId) REFERENCES contact(id),
		FOREIGN KEY (offeringId) REFERENCES offering(id),
		FOREIGN KEY (caseDetailsId) REFERENCES case_detail(id),
		FOREIGN KEY (technologyid) REFERENCES technology(id),
		FOREIGN KEY (challengeid) REFERENCES challenge(id),
		FOREIGN KEY (improvementid) REFERENCES improvement(id)	
		);

INSERT INTO successcase (title, startdate, finishdate, ispublic, teamsize, industryid, clientid, contactid, offeringid, projecttypeid, technologyid, challengeid, improvementid, casedetailsid)
VALUES
('Success of EA', '2023-09-01', '2023-11-15', true, 7, 10, 2, 1, 13, 3, 1, 1, 1, 1),
('Miracle in NatGeo', '2023-11-06', '2024-04-08', true, 11, 5, 3, 2, 14, 4, 2, 2, 2, 2),
('Unbelievably success in IBM', '2004-02-28', '2005-01-08', true, 3, 5, 6, 3, 13, 8, 3, 3, 3, 3);