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
 