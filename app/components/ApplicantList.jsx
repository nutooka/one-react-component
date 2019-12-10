var React = require('react');
var Applicant = require('Applicant');
var Constants = require('../Constants.js');

function ApplicantList() {
  const applicants = Constants.applicants;
  const applicantsList = applicants.map((applicant,i)=> {
    return <Applicant key={i} name={applicant.name} approved={applicant.approved} rejected={applicant.rejected} status={applicant.status} hasImg={applicant.hasImg}/>;
  });

  return (
    <div>
      {applicantsList}
    </div>
  );
}

module.exports = ApplicantList;
