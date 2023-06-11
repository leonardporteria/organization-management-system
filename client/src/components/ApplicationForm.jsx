import OrganizationInformation from './personalInfoForm/organizationInformation';
import PersonalInformation from './personalInfoForm/personalInformation';
import SponsorInformation from './personalInfoForm/sponsorInformation';
import EmployeeInformation from './personalInfoForm/employmentInformation';
import EducaitonInformation from './personalInfoForm/educationInformation';
import LegalDependentInformation from './personalInfoForm/legalDependentsInformation';
import ContactInformation from './personalInfoForm/contactInformation';

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
