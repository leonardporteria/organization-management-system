export const queryAnswers = {
  easy: [
    {
      queryNumber: 1,
      sqlScript: `
        SELECT member_name, DATEDIFF(CURRENT_DATE(), date_of_birth) / 365 AS age
        FROM member_information
        WHERE address LIKE '%Metro Manila%' AND DATEDIFF(CURRENT_DATE(), date_of_birth) / 365 BETWEEN 15 AND 25;
        `,
    },
    {
      queryNumber: 2,
      sqlScript: `
        SELECT member_name, sponsor_name, address
        FROM member_information
        WHERE sponsor_name = 'Liam, K, Jose,' AND address LIKE '%Metro Manila%';
        `,
    },
    {
      queryNumber: 3,
      sqlScript: `
        SELECT club_president, club_name
        FROM organization_club;
      `,
    },
    {
      queryNumber: 4,
      sqlScript: `
        SELECT member_name, blood_type
        FROM member_information
        WHERE blood_type LIKE 'O%';
      `,
    },
    {
      queryNumber: 5,
      sqlScript: `
        SELECT member_name, company_code
        FROM member_information
        WHERE company_code is not null;
      `,
    },
  ],
  medium: [
    {
      queryNumber: 1,
      sqlScript: `
        SELECT sponsor_name, COUNT(DISTINCT member_id) AS total_sponsored_members
        FROM member_information
        WHERE sponsor_name IS NOT NULL
        GROUP BY sponsor_name;
      `,
    },
    {
      queryNumber: 2,
      sqlScript: `
        SELECT M.member_name, C.company_name
        FROM member_information AS M
        INNER JOIN company AS C ON M.company_code = C.company_code;
        `,
    },
    {
      queryNumber: 3,
      sqlScript: `
        SELECT DISTINCT M.member_name, M.civil_status, O.club_name
        FROM application_details AS A
        INNER JOIN organization_club AS O ON A.club_id = O.club_id AND O.club_name = 'Sunday Uplifters'
        INNER JOIN member_information AS M ON A.member_id = M.member_id AND M.civil_status IN ('SIN', 'MAR');
        `,
    },
    {
      queryNumber: 4,
      sqlScript: `
        SELECT DISTINCT M.member_name, A.date_of_application
        FROM member_information AS M
        INNER JOIN application_details AS A ON M.member_id = A.member_id
        WHERE YEAR(A.date_of_application) < 2020;
      `,
    },
    {
      queryNumber: 5,
      sqlScript: `
        SELECT DISTINCT M.member_name, M.work_title_or_position, C.company_address
        FROM application_details AS A
        INNER JOIN member_information AS M ON A.member_id = M.member_id
        INNER JOIN company AS C ON M.company_code = C.company_code
        WHERE C.company_address LIKE '%Makati%';
        `,
    },
    {
      queryNumber: 6,
      sqlScript: `
        SELECT COUNT(*) AS member_working_at_metro_manila
        FROM member_information AS M
        INNER JOIN company AS C ON M.company_code = C.company_code
        WHERE C.company_address LIKE '%Metro Manila%';
       `,
    },
    {
      queryNumber: 7,
      sqlScript: `
        SELECT DISTINCT M.member_name, E.education_level, E.school_name, E.date_graduated
        FROM application_details AS A
        INNER JOIN education AS E ON A.education_id = E.education_id AND E.education_level = 'Elementary'
        INNER JOIN member_information AS M ON A.member_id = M.member_id;
        `,
    },
    {
      queryNumber: 8,
      sqlScript: `
        SELECT DISTINCT M.member_name, D.dependent_name
        FROM application_details AS A
        INNER JOIN member_information AS M ON A.member_id = M.member_id
        INNER JOIN legal_dependents AS D ON A.dependent_id = D.dependent_id
        WHERE D.dependent_relationship = 'Spouse' AND M.sex = 'M';
        `,
    },
    {
      queryNumber: 9,
      sqlScript: `
        SELECT DISTINCT M.member_name, M.sponsor_name
        FROM application_details AS A
        INNER JOIN member_information AS M ON A.member_id = M.member_id AND M.sponsor_name IS NOT NULL
        ORDER BY M.sponsor_name;
        `,
    },
  ],
  hard: [
    {
      queryNumber: 1,
      sqlScript: `
        SELECT O.club_name, COUNT(DISTINCT A.member_id) AS members_per_club
        FROM organization_club AS O
        INNER JOIN application_details AS A ON O.club_id = A.club_id
        GROUP BY O.club_name;
      `,
    },
    {
      queryNumber: 2,
      sqlScript: `
        SELECT  A.member_id, COUNT(DISTINCT A.dependent_id) AS dependent_count
        FROM application_details AS A
        INNER JOIN legal_dependents AS D ON A.dependent_id = D.dependent_id
        GROUP BY A.member_id
        HAVING COUNT(A.dependent_id) > 0;
        `,
    },
    {
      queryNumber: 3,
      sqlScript: `
        SELECT C.company_name,M.sex, COUNT(*) AS member_count
        FROM member_information AS M
        INNER JOIN company AS C ON M.company_code = C.company_code
        GROUP BY C.company_name,M.sex, C.company_code;
        `,
    },
    {
      queryNumber: 4,
      sqlScript: `
        SELECT C.company_name, COUNT(DISTINCT M.member_id) AS total_employees
        FROM member_information AS M
        INNER JOIN company AS C ON M.company_code = C.company_code
        WHERE C.company_name IN ('Accenture Philippines', 'Tower Communications')
        GROUP BY C.company_name;
        `,
    },
    {
      queryNumber: 5,
      sqlScript: `
        SELECT O.club_region, COUNT(DISTINCT A.member_id) AS club_member_count
        FROM organization_club AS O
        INNER JOIN application_details AS A ON O.club_id = A.club_id
        INNER JOIN member_information AS M ON A.member_id = M.member_id
        WHERE O.club_region IN ('CALABARZON', 'NCR')
        GROUP BY O.club_region;
        `,
    },
    {
      queryNumber: 6,
      sqlScript: `
        SELECT club_region, club_name, count(DISTINCT A.member_id) AS members_per_club
        FROM member_information as M
        INNER JOIN application_details as A on M.member_id = A.member_id
        INNER JOIN organization_club as O on A.club_id = O.club_id
        GROUP BY club_region, club_name;
    `,
    },
  ],
};
