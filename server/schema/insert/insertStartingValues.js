import { pool } from '../../config/database.js';
import dotenv from 'dotenv';
dotenv.config();

export const setStartingValues = async () => {
  console.log('SETTING UP STARTING VALUES');
  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  await pool.query(useQuery);

  await pool.query(`
  insert into company
    values  ('183020-W1', 'Quantum Studios', '8892342289', 'quantumstudios@gmail.com', '107 Katipunan Road, Quezon City'),
	('171640-W2', 'Lifestyle Valley', '9924242521', 'valley_life@gmail.com', '1840 Santan 1200 Makati City, Metro Manila,'),
	('201950-W3', 'Philippine General Hospital', '0285548400', 'pghtcc@gmail.com', 'HXHP+36Q, Taft Ave, Ermita, Manila, 1000 Metro Manila'),
	('220440-W4', 'Tower Communications', '7882347583', 'Tower_comm@gmail.com', 'Peninsula Building 1200 Makati City, Metro Manila'),
	('152200-W5', 'Department of Justice', '3285238481', 'osec@doj.gov.ph', 'Padre Faura Street, Ermita, Manila 1000 Republic of the Philippines'),
	('190080-W1', 'iQor Philippines', '9555622420', 'iqorphilippines@gmail.com', 'The Core, 6th Floor, Santa Rosa, Laguna'),
	('220310-W1', 'Accenture Philippines', '9175805888', 'accenture@gmail.com', 'Cyberzone, Axis Tower One Northgate, Filinvest City, 8th Floor, Alabang, Muntinlupa, 1781'),
	('192030-W1', 'Ubiquity Career Philippines', '9071238213', 'BetterWithU@ubiquity.com', '2F 1800 Eastwood Avenue Building, Eastwood City, Bagumbayan, Quezon City 1110, Philippine'),
	('162310-W1', 'R&B Import and Export Trading', '6333383852', 'rnbimportnexporttrading@gmail.com', 'VML Molo, Iloilo City');

  `);

  await pool.query(`
  insert into legal_dependents
    values  ('120316006-D1', 'Mianne Garcia', '2004-03-24', '09934232346', 'Daughter'),
	('182210001-D1', 'Clara Benitez', '1992-12-19', '09876372332', 'Spouse'),
	('120316006-D2', 'Belinda Garcia', '1965-08-09', '09967342742', 'Mother'),
	('171220003-D1', 'Joy Buendia', '1989-03-27', '09975462632', 'Spouse'),
	('140108002-D1', 'Israel Tomas', '2003-09-23', '09934238779', 'Son'),
    ('190080116-D1', 'Alexian Cruz', '1987-01-12', '09934232346', 'Spouse'),
	('190080116-D2', 'Sam Alexis Cruz', '2006-12-21', '09934232346', 'Daughter'),
	('190080116-D3', 'Alexandra Cruz', '2007-07-28', '09934232346', 'Son'),
	('220310045-D1', 'Anastasia Ramil', '1979-02-25', '09876372332', 'Mother'),
	('220310045-D2', 'Roberto Ramil', '1975-05-12', '09876372332', 'Father'),
	('171190031-D1', 'Janet Ramos', '1981-11-21', '09967342742', 'Mother'),
	('171190031-D2', 'Adolfo Ramos', '1978-09-13', '09967342742', 'Father'),
	('192030058-D1', 'Mila Topez', '1975-11-11', '09975462632', 'Mother'),
	('162310092-D1', 'Janice Delos Reyes', '1988-04-17', '09934238779', 'Spouse'),
	('162310092-D2', 'John Carlo Delos Reyes', '2009-09-23', '09934238779', 'Son');

  `);

  await pool.query(`
  insert into contact_person
    values ('120316006-C1', 'Mariel Garcia', '09873865826', '789 Taft Avenue, Barangay Malibay, Pasay City, Metro Manila, Philippines', 'Spouse'),
    ('171220003-C1', 'Crisanta David', '09327684824', '123 Rizal Street, Barangay Santa Cruz, Quezon City, Metro Manila, Philippines', 'Mother'),
    ('140108002-C1', 'Klaro Tomas', '09987612424', '789 Mabini Avenue, Barangay Malate, Metro Manila', 'Spouse'),
    ('190600004-C1', 'Mercado Mercedes', '09353858318', '456 J.P. Laurel Street, Barangay San Antonio, Pasig City, Metro Manila, Philippines', 'Father'),
    ('182210001-C1', 'John Jose', '09678328695', '456 P. Burgos Street, Barangay Poblacion, Makati City, Metro Manila, Philippines', 'Father'),
    ('160980334-C1', 'Alfonso Martinez', '09245326635', '123 Orchid Street, Pasig City', 'Father'),
	('190080116-C1', 'Alexian Cruz', '09990978576', '123 Purok 6, Barangay Tagapo, City of Sta. Rosa, Laguna', 'Husband'),
	('220310045-C1', 'Anastasia Ramil', '09819283910', 'Kilometer 80, Maharlika Highway, Barangay San Rafael, San Pablo City, Laguna', 'Father'),
	('220310045-C2', 'Roberto Ramil', '09129381732', 'Kilometer 80, Maharlika Highway, Barangay San Rafael, San Pablo City, Laguna', 'Mother'),
	('171190031-C1', 'Janet Ramos', '09010273911', 'Plazotela, Station II, Boracay Island, Malay, Aklan', 'Mother'),
	('171190031-C2', 'Adolfo Ramos', '09168279182', 'Plazotela, Station II, Boracay Island, Malay, Aklan', 'Father'),
    ('192030058-C1', 'Mila Topez', '09089182991', '7 Blk 1a-4 Road 18 Phase 5 Cogeo Village,1870, Antipolo City, Rizal', 'Mother'),
    ('162310092-C1', 'Janice Delos Reyes', '09128379293', 'Q. Abeto Street, Barangay Abeto Rizal, Iloilo City', 'Wife');

  `);

  await pool.query(`
  insert into education
  values
  ('120316006-E0', 'Elementary', 'Payatas Elementary School', '1992-04-24', 'N/A'),
  ('120316006-E1', 'Junior High School', 'Payatas National High School', '1996-04-19', 'N/A'),
  ('120316006-E3', 'College', 'Philippine Normal University', '2000-08-03', 'Accountancy'),
  
  ('140108002-E0', 'Elementary', 'Malabon Elementary School', '1993-04-30', 'N/A'),
  ('140108002-E1', 'Junior High School', 'Malabon National High School', '1997-05-04', 'N/A'),
  ('140108002-E3', 'College', 'University of the East', '2004-09-30', 'Human Resource Management'),
  
  ('171220003-E0', 'Elementary', 'Camalig Elementary School', '2001-04-17', 'N/A'),
  ('171220003-E1', 'Junior High School', 'Camarin Barangay High School', '2007-04-23', 'N/A'),
  ('171220003-E3', 'College', 'Our Lady of Fatima University', '2011-05-14', 'Nursing'),
  
  ('190600004-E0', 'Elementary', 'Camalig Elementary School', '2004-04-06', 'N/A'),
  ('190600004-E1', 'Junior High School', 'Camalig National High School', '2008-04-22', 'N/A'),
  ('190600004-E3', 'College', 'Centro Escolar University', '2013-06-28', 'Secondary Education Major in English'),
  
  ('182210001-E0', 'Elementary', 'UP - Integrated School', '2002-06-14', 'N/A'),
  ('182210001-E1', 'Junior High School', 'University of the Philippines - Diliman', '2007-05-01', 'N/A'),
  ('182210001-E3', 'College', 'University of the Philippines - Diliman', '2013-07-26', 'Information Technology'),
  
  ('160980334-E0', 'Elementary', 'Catmon Elementary School', '1994-04-14', 'N/A'),
  ('160980334-E1', 'Junior High School', 'Lolomboy National High School', '1998-04-04', 'N/A'),
  ('160980334-E3', 'College', 'UP - Integrated School', '2002-06-14', 'N/A'),
  
  ('190080116-E0', 'Elementary', 'Tagapo Elemantary School', '2001-04-24', 'N/A'),
  ('190080116-E1', 'Junior High School', 'Aplaya National High School', '2005-04-24', 'N/A'),
  ('190080116-E3', 'College', 'Polytechnic University of the Philippines - Santa Rosa', '2009-04-24', 'BSBAHRM'),
  
  ('220310045-E0', 'Elementary', 'San Pablo Elementary School', '2012-03-11', 'N/A'),
  ('220310045-E1', 'Junior High School', 'San Pablo City Science High School', '2016-03-11', 'N/A'),
  ('220310045-E3', 'College', 'STI College San Pablo', '2020-03-11', 'N/A'),
  
  ('171190031-E0', 'Elementary', 'Balabag Elementary School', '2011-05-11', 'N/A'),
  ('171190031-E1', 'Junior High School', 'Boracay National High School', '2015-05-11', 'N/A'),
  
  ('192030058-E0', 'Elementary', 'Juan Sumulong Elementary School', '2009-04-04', 'N/A'),
  ('192030058-E1', 'Junior High School', 'Sumulong Memorial High School', '2013-04-04', 'N/A'),
  ('192030058-E3', 'College', 'University of Rizal System, Antipolo Campus', '2017-04-04', 'N/A'),
  
  ('162310092-E0', 'Elementary', 'Iloilo Central Elementary School', '1999-04-13', 'N/A'),
  ('162310092-E1', 'Junior High School', 'Hua Siong College of Iloilo, Ledesco Campus', '2003-04-13', 'N/A'),
  ('162310092-E3', 'College', 'Hua Siong College of Iloilo, Ledesco Campus', '2007-04-13', 'N/A');
  

  `);

  await pool.query(`
  insert into member_information(member_id, member_name, place_of_birth, date_of_birth, address, age, sex, height_in_cm, weight_in_kg, bmi, civil_status, nationality, religion, blood_type, telephone_number, cellphone_number, email, sponsor_name, sponsor_membership_id, work_title_or_position, company_code)
  values ('182210001', 'Liam, K. ,Jose,', 'Manila, Metro Manila, Philippines', '2001-08-12', '456 P. Burgos Street, Barangay Poblacion, Makati City, Metro Manila, Philippines', age, 'M', 165, 60, bmi, 'SIN', 'Filipino', 'Catholic', 'AB', '5821234567', '09171234567', 'liamjose@gmail.com', null, null, 'Software Developer', '183020-W1'),
       ('140108002', 'Emma, J., Tomas,', 'Cebu City, Cebu, Philippines', '1987-04-23', '789 Mabini Avenue, Barangay Malate, Metro Manila', age, 'F', 172, 68, bmi, 'MAR', 'Filipino', 'Christian', 'B', '6512345678', '9262345678', 'emmatomas@gmail.com', 'Liam Jose', '182210001', 'Marketing Manager', '171640-W2'),
          ('171220003', 'Noah, R.,David,', 'Davao City, Davao del Sur, Philippines', '1990-11-05', '123 Rizal Street, Barangay Santa Cruz, Quezon City, Metro Manila, Philippines', age, 'M', 158, 55, bmi, 'SIN', 'Filipino', 'Adventist', 'A-', '2523456789', '09323252858', 'noahdavid@gmail.com', null, null, 'Nurse', '201950-W3'),
    ('190600004', 'Olivia, S.,Mercedes,', 'Quezon City, Metro Manila, Philippines', '1992-03-17', '456 J.P. Laurel Street, Barangay San Antonio, Pasig City, Metro Manila, Philippines', age, 'F', 180, 75, bmi, 'SIN', 'Filipino', 'Catholic', 'A', '8786438654', '09875386729', 'olivia_m@gmail.com', 'Liam Jose', '182210001', 'Customer Service Representative', '220440-W4'),
    ('120316006', 'William, D.,Garcia,', 'Bacolod City, Negros Occidental, Philippines', '1984-09-29', '789 Taft Avenue, Barangay Malibay, Pasay City, Metro Manila, Philippines', age, 'M', 155, 50, bmi, 'MAR', 'Filipino', 'Catholic', 'O', '8923745274', '09647284728', 'will_grc@gmail.com', 'Liam Jose', '182210001', 'Accountant', '152200-W5'),
    ('160980334', 'Kristof, C.,Martinez,', 'Quezon City, Metro Manila, Philippines', '1982-12-10', '123 Orchid Street, Pasig City', age, 'M', 152, 55, bmi, 'SIN', 'Filipino', 'Catholic', 'O', '4352276849', '09876834768', 'krish_mar@gmail.com', 'Olivia Mercedes', '190600004', 'Human Resource Manager', '220440-W4'),
    ('190080116', 'Samantha, C.,Cruz,', 'Santa Rosa City, Laguna', '1959-12-02', '123 Purok 6, Barangay Tagapo, City of Sta. Rosa, Laguna', age, 'F', 160, 70, bmi, 'MAR', 'Filipino', 'Dating Daan', 'O', '9817402964', '09187284193', 'samanthacruz@gmail.com', null, null, 'Human Resource Manager', '190080-W1'),
      ('220310045', 'Oliver, C.,Ramil,', 'Baguio City, Benguet', '2000-03-25', 'Kilometer 80, Maharlika Highway, Barangay San Rafael, San Pablo City, Laguna', age, 'M', 171, 68, bmi, 'SIN', 'Filipino', 'Adventist', 'A', '8719209148', '09718274192', 'oliver.ramil@gmail.com', null, null, 'Quality Assurance Analyst', '220310-W1'),
      ('171190031', 'Angelica, R.,Ramos,', 'Manila City, Metro Manila', '1999-10-28', 'Plazotela, Station II, Boracay Island, Malay, Aklan', age, 'F', 177, 72, bmi, 'SIN', 'Filipino', 'Christian', 'AB', '9817492752', '09179276467', 'angelica_ramos28@gmail.com', 'Oliver Ramil', '220310045', null, null),
      ('192030058', 'Anthony, Q.,Topez,', 'Tagaytay City, Cavite', '1997-05-14', '7 Blk 1a-4 Road 18 Phase 5 Cogeo Village,1870, Antipolo City, Rizal', age, 'M', 165, 62, bmi, 'SIN', 'Filipino', 'Catholic', 'A-', '9182701837', '09068182942', 'a.topez@gmail.com', 'Emma Tomas', '140108002', 'Senior Accounting Analyst', '192030-W1'),
      ('162310092', 'George, A.,Delos Reyes, Jr.', 'Batangas City, Batangas', '1987-11-12', 'Q. Abeto Street, Barangay Abeto Rizal, Iloilo City', age, 'M', 162, 67, bmi, 'MAR', 'Filipino', 'Catholic', 'B', '9183747491', '09168276391', 'george.dr@gmail.com', null, null, 'Financial Analyst', '162310-W1'); 
 
  `);

  await pool.query(`
  insert into organization_club
    values  ('CLUB16208008', 'CALABARZON', 'The Daily Scene', 'Olivia Mercedes', '190600004'),
	('CLUB19312003', 'CALABARZON', 'Sunday Uplifters', 'William Garcia', '120316006'),
	('CLUB15204007', 'NCR', 'Social Stone Circle', 'Noah David', '171220003'),
	('CLUB23004001', 'NCR', 'Art Unity House', 'Emma Tomas', '140108002'),
	('CLUB19190006', 'Western Visayas', 'Hand in Hand Socialities', 'Liam Jose', '182210001'),
	('CLUB18290021', 'Western Visayas', 'Everyones House', 'Oliver Ramil', '220310045');
  `);

  await pool.query(`
  insert into application_details(member_id, club_id, education_id, dependent_id, contact_id, application_status, date_of_application) 
  values ('182210001', 'CLUB19190006', '182210001-E0', '182210001-D1', '182210001-C1', 'Active', '2018-08-19'),
     ('182210001', 'CLUB19190006', '182210001-E1', '182210001-D1', '182210001-C1', 'Active', '2018-08-19'),
     ('182210001', 'CLUB19190006', '182210001-E3', '182210001-D1', '182210001-C1', 'Active', '2018-08-19'),

     ('171220003', 'CLUB15204007', '171220003-E0', '171220003-D1', '171220003-C1', 'Active', '2017-03-15'),
     ('171220003', 'CLUB15204007', '171220003-E1', '171220003-D1', '171220003-C1', 'Active', '2017-03-15'),
     ('171220003', 'CLUB15204007', '171220003-E3', '171220003-D1', '171220003-C1', 'Active', '2017-03-15'),

     ('190600004', 'CLUB16208008', '190600004-E0', NULL, '190600004-C1', 'Active', '2019-03-27'),
     ('190600004', 'CLUB16208008', '190600004-E1', NULL, '190600004-C1', 'Active', '2019-03-27'),
     ('190600004', 'CLUB16208008', '190600004-E3', NULL, '190600004-C1', 'Active', '2019-03-27'),

     ('140108002', 'CLUB23004001', '140108002-E0', '140108002-D1', '140108002-C1', 'Active', '2014-07-16'),
     ('140108002', 'CLUB23004001', '140108002-E1', '140108002-D1', '140108002-C1', 'Active', '2014-07-16'),
     ('140108002', 'CLUB23004001', '140108002-E3', '140108002-D1', '140108002-C1', 'Active', '2014-07-16'),

     ('120316006', 'CLUB19312003', '120316006-E0', '120316006-D1', '120316006-C1', 'Active', '2012-11-06'),
     ('120316006', 'CLUB19312003', '120316006-E1', '120316006-D1', '120316006-C1', 'Active', '2012-11-06'),
     ('120316006', 'CLUB19312003', '120316006-E3', '120316006-D1', '120316006-C1', 'Active', '2012-11-06'),
     ('120316006', 'CLUB19312003', '120316006-E0', '120316006-D2', '120316006-C1', 'Active', '2012-11-06'),
     ('120316006', 'CLUB19312003', '120316006-E1', '120316006-D2', '120316006-C1', 'Active', '2012-11-06'),
     ('120316006', 'CLUB19312003', '120316006-E3', '120316006-D2', '120316006-C1', 'Active', '2012-11-06'),

     ('160980334', 'CLUB19190006', '160980334-E0', null, '160980334-C1', 'Active', '2016-03-24'),
     ('160980334', 'CLUB19190006', '160980334-E1', null, '160980334-C1', 'Active', '2016-03-24'),
     ('160980334', 'CLUB19190006', '160980334-E3', null, '160980334-C1', 'Active', '2016-03-24'),
     
   ('190080116', 'CLUB19190006', '190080116-E0', '190080116-D1', '190080116-C1', 'Active', '2012-02-18'),
   ('190080116', 'CLUB19190006', '190080116-E1', '190080116-D2', '190080116-C1', 'Active', '2012-02-18'),
   ('190080116', 'CLUB19190006', '190080116-E3', '190080116-D3', '190080116-C1', 'Active', '2012-02-18'),
     
   ('220310045', 'CLUB18290021', '220310045-E0', '220310045-D1', '220310045-C1', 'Active', '2020-07-06'),
   ('220310045', 'CLUB18290021', '220310045-E1', '220310045-D2', '220310045-C1', 'Active', '2020-07-06'),
   ('220310045', 'CLUB18290021', '220310045-E3', '220310045-D1', '220310045-C1', 'Active', '2020-07-06'),

   ('171190031', 'CLUB16208008', '171190031-E0', '171190031-D1', '171190031-C1', 'Active', '2019-09-12'),
   ('171190031', 'CLUB16208008', '171190031-E1', '171190031-D2', '171190031-C1', 'Active', '2019-09-12'),

   ('192030058', 'CLUB19312003', '162310092-E0', '192030058-D1', '192030058-C1', 'Active', '2017-10-09'),
   ('192030058', 'CLUB19312003', '162310092-E1', '192030058-D1', '192030058-C1', 'Active', '2017-10-09'),
   ('192030058', 'CLUB19312003', '162310092-E3', '192030058-D1', '192030058-C1', 'Active', '2017-10-09'),

   ('162310092', 'CLUB19312003', '162310092-E0', '162310092-D1', '162310092-C1', 'Active', '2010-05-21'),
   ('162310092', 'CLUB19312003', '162310092-E1', '162310092-D2', '162310092-C1', 'Active', '2010-05-21');

  `);
};
