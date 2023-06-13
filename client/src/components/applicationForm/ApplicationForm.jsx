import OrganizationInformation from './subForms/organizationInfo/organizationInformation';
import PersonalInformation from './subForms/personalInfo/personalInformation';
import SponsorInformation from './subForms/sponsorInfo/sponsorInformation';
import EmployeeInformation from './subForms/employmentInfo/employmentInformation';
import EducaitonInformation from './subForms/educationInfo/educationInformation';
import LegalDependentInformation from './subForms/legalDepInfo/legalDependentsInformation';
import ContactInformation from './subForms/contactInfo/contactInformation';

const ApplicationForm = () => {
  return (
    <div className='flex flex-col items-center gap-4 w-11/12'>
      <OrganizationInformation />
      <PersonalInformation />
      <EmployeeInformation />
      <EducaitonInformation />
      <LegalDependentInformation />
      <ContactInformation />
      <SponsorInformation />

      <div className='w-40 h-12 bg-green-800 flex justify-center items-center cursor-pointer'>
        <h1 className='from-neutral-50'>Submit Application</h1>
      </div>
    </div>
  );
};

export default ApplicationForm;
