import './LandingPage.scss';

const LandingPage = () => {
  return (
    <>
      <div className='Header'>
        <h1>Socio-Civing Organization</h1>
      </div>

      <div className='Hero'>
        <div className='Hero__About'>
          <h1>About this Project</h1>
          <p>
            This project aims to create a membership verification system for an
            applicant, checking their eligibility and identifying any pending
            applications in other clubs or regions. The organization's goal is
            to introduce a new approach to humanitarian service in the
            Philippines, benefiting society. The membership form is exclusive to
            individuals aged 15 to 65 interested in joining a socio-civic
            organization that promotes community service and strong
            brotherhoods. The form includes personal information, employment
            details, education, dependents, emergency contact, sponsor, and
            regional/club information.
          </p>
        </div>

        <div className='Hero__Rules'>
          <h1>Business Rules</h1>
          <p>• A Member can be part of one club at a time only.</p>
          <p>
            • A Member must leave the current club before can join another club.
          </p>
          <p>• A Club may have multiple members but may not have any at all.</p>
          <p>• Transfer of membership or membership reactivation is allowed.</p>
          <p>• A Region is composed of multiple clubs.</p>
          <p>• A Club must have only one president.</p>
          <p>• A Club president must be a member of its own club.</p>
          <p>• A president must be a president of one club only.</p>
          <p>
            • A member can facilitate a newly created club event though he is
            not a part of it.
          </p>
          <p>• A Member can be a president of one club at a time.</p>
          <p>
            • A Member can be part of a company that other members are part of.
          </p>
          <p>
            • Membership sponsorship shall be made by any bonafide club member;
            if there is.
          </p>
          <p>
            • A Member can sponsor multiple members even on different clubs.
          </p>
          <p>• A Member can be sponsored by only one sponsor.</p>
          <p>• A Member may only be employed at one company.</p>
          <p>
            • A Company may employ multiple members, possibly different
            positions.
          </p>
          <p>
            • An Applicant may have one or more legal dependents but may have
            not any at all.
          </p>
          <p>• A Legal Dependent must be a dependent of one applicant only.</p>
          <p>
            • An Applicant may have attained one or more education but may have
            not at all.
          </p>
          <p>• An Education must be attained by one applicant only.</p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
