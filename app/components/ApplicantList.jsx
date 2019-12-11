var React = require('react');

var Applicant = require('Applicant');
var Constants = require('../Constants.js');

class ApplicantList extends React.Component {
  constuctor() {
    this.state = { applicants: [] };
  }

  componentWillMount() {
    const { applicants } = Constants;
    this.setState({ applicants });
  }

  statusChange(id) {
    const { applicants } = this.state;

    // Update applicant's status in the applicants array
    applicants.forEach((applicant, i) => {
      if (applicant.id === id) {
        applicants[i].status = 'seen';
      }
    });

    this.setState({ applicants });
  }

  render() {
    const { applicants } = this.state;
    const applicantsList = applicants.map((applicant,i)=> {
      return <Applicant
        key={i}
        id={applicant.id}
        name={applicant.name}
        approved={applicant.approved}
        rejected={applicant.rejected}
        status={applicant.status}
        hasImg={applicant.hasImg}
        statusChange={this.statusChange.bind(this)}
      />;
    });

    return (
      <div>
        {applicantsList}
      </div>
    );
  }
}

module.exports = ApplicantList;
