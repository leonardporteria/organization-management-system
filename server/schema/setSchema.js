import { pool } from '../config/database.js';

// create tables
export const createTables = async () => {
  await createCompanyTable();
  await createEducationTable();
  await createDependentsTable();
  await createContactTable();
  await createMemberTable();
  await createOrganizationTable();
  await createMemberRelationTable();

  return 'SCHEMA CREATED';
};

const createCompanyTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS COMPANY(
        company_code char(9) PRIMARY KEY,
        company_name varchar(50) NOT NULL,	
        company_telephone varchar(10) NOT NULL,	
        company_email varchar(50) NOT NULL,	
        company_address varchar(50) NOT NULL
    );
    `;
  await pool.query(query);
};

const createEducationTable = async () => {
  const query = `
  CREATE TABLE IF NOT EXISTS EDUCATION(
	education_id char(12) PRIMARY KEY,
    education_level varchar(20) NOT NULL,	
	school_name varchar(50) NOT NULL,	
	date_graduated date NOT NULL,	
	course_strand varchar(50) NOT NULL
);
      `;
  await pool.query(query);
};

const createDependentsTable = async () => {
  const query = `
  CREATE TABLE IF NOT EXISTS LEGAL_DEPENDENTS(
	dependent_id char(12) PRIMARY KEY,
    dependent_name varchar(50) NOT NULL,	
	dependent_date_of_birth date NOT NULL,	
	dependent_contact_number char(11) NOT NULL,	
	dependent_relationship varchar(15) NOT NULL
);
      `;
  await pool.query(query);
};

const createContactTable = async () => {
  const query = `
  CREATE TABLE IF NOT EXISTS CONTACT_PERSON(
	contact_id char(12) PRIMARY KEY,
    contact_name varchar(50) NOT NULL,	
	contact_cellphone_number char(11) NOT NULL,	
    contact_address varchar(50) NOT NULL,
	contact_relationship varchar(15) NOT NULL
);
      `;
  await pool.query(query);
};

const createMemberTable = async () => {
  const query = `
  CREATE TABLE IF NOT EXISTS MEMBER_INFORMATION(
    member_id char(9) PRIMARY KEY,
    member_name varchar(50) NOT NULL,
    place_of_birth varchar(50) NOT NULL,
    date_of_birth date NOT NULL,	
    address varchar(50) NOT NULL,
    age	int(2) CHECK (age >= 15 AND age <= 65),
    sex	char(1) NOT NULL,
    heigh_in_cm	decimal(5,2) NOT NULL,
    weight_in_kg decimal(5,2) NOT NULL,
    bmi	decimal	(6,4),
    civil_status varchar(8) NOT NULL,
    nationality	varchar(15) NOT NULL,
    religion varchar(25) NOT NULL,
    blood_type varchar(3) NOT NULL,
    telephone_number varchar(10),
    cellphone_number char(11) NOT NULL,
    email varchar(50) NOT NULL,
    sponsor_name varchar(50),
    sponsor_membership_id char(9),
    work_title_or_position varchar(20),
    company_code char(9),
    
    foreign key(sponsor_membership_id) references MEMBER_INFORMATION(member_id),
    foreign key(company_code) references COMPANY(company_code)
    );
      `;
  await pool.query(query);
};

const createOrganizationTable = async () => {
  const query = `
  CREATE TABLE IF NOT EXISTS ORGANIZATION_CLUB(
    club_id char(12) PRIMARY KEY,
    club_region varchar(30) NOT NULL,
    club_name varchar(50) NOT NULL,
    club_president varchar(50) NOT NULL,
    club_president_member_id char(9) NOT NULL,
    
    foreign key(club_president_member_id) references MEMBER_INFORMATION(member_id)
    );
    `;
  await pool.query(query);
};

const createMemberRelationTable = async () => {
  const query = `
      CREATE TABLE IF NOT EXISTS APPLICATION_DETAILS(
        applicant_code int(7) PRIMARY KEY AUTO_INCREMENT,
        member_id char(9) NOT NULL,
        club_id	char(12) NOT NULL,
        education_id char(12),
        dependent_id char(12),
        contact_id char(12) NOT NULL,
        application_status varchar(10) NOT NULL DEFAULT "Pending",
        date_of_application	date NOT NULL,
        
        foreign key(member_id) references MEMBER_INFORMATION(member_id),
        foreign key(club_id) references ORGANIZATION_CLUB(club_id),
        foreign key(education_id) references EDUCATION(education_id),
        foreign key(dependent_id) references LEGAL_DEPENDENTS(dependent_id),
        foreign key(contact_id) references CONTACT_PERSON(contact_id)
        );
      `;
  await pool.query(query);
};
