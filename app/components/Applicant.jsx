const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');

const Constants = require('../Constants.js');

class Applicant extends React.Component {
  isBetween(value, interval) {
    return interval[0] >= value && value >= interval[1];
  }

  imgPath() {
    const { hasImg, name } = this.props;
    return hasImg ? `/img/${name}.jpg` : '';
  }

  isUnseen() {
    const { status } =  this.props;
    return status !== 'seen';
  }

  isNotRecorded() {
    const { approved, rejected } = this.props;
    return approved === 0 && rejected === 0;
  }

  calcPercentage() {
    const { approved, rejected } = this.props;
    const votesAll = approved + rejected;

    // Return percentage
    return (votesAll !== 0) ? (approved / votesAll).toFixed(2) * 100 : '';
  }

  statusChange() {
    this.props.statusChange(this.props.id);
  }

  render() {
    const {
      name,
      approved,
      rejected,
      status
    } = this.props;
    const { interval } = Constants;

    const img = this.imgPath();
    const percentage = this.calcPercentage();

    let percentageString = '';
    let dataTitle;
    let dataText;

    if (this.isNotRecorded()) {
      dataTitle = 'Not recorded yet';
      dataText = '';
    }	else {
      dataTitle = 'Votes';
      dataText = `${approved} yes : ${rejected} no`;
      percentageString = `${percentage}%`;
    }

    const applicantVotesClass = classNames({
      'applicant__votes': true,
      'applicant__votes--100': this.isBetween(percentage,interval[0]),
      'applicant__votes--80': this.isBetween(percentage,interval[1]),
      'applicant__votes--60': this.isBetween(percentage,interval[2]),
      'applicant__votes--40': this.isBetween(percentage,interval[3]),
      'applicant__votes--20': this.isBetween(percentage,interval[4]),
      'applicant__votes--0': this.isBetween(percentage,interval[5]),
      'applicant__votes--x': this.isNotRecorded()
    });

    const personStatusClass = classNames({
      'person__status': true,
      'person__status--unseen': this.isUnseen()
    });

    const dataTitleClass = classNames({
      'data__title': true,
      'data__title--with-margin': !this.isNotRecorded(),
      'data__title--no-margin': this.isNotRecorded()
    });

    const dataTextClass = classNames({
      'data__text':true,
      'data__text--show': !this.isNotRecorded(),
      'data__text--hide': this.isNotRecorded()
    });

    return (
      <div className="applicant" onClick={this.statusChange.bind(this)}>

        <div className={applicantVotesClass}>
          <div className="votes__percentage">
            {percentageString}
          </div>

          <div className="votes__tooltip">
						<pre className="votes-tooltip__data">
							<span className={dataTitleClass}> {dataTitle} </span>
							<span className={dataTextClass}> {dataText} </span>
						</pre>
          </div>
        </div>

        <div className="applicant__person">
          <div className="person__img">
            { img ? <img className="person-img__img" src={img} alt={name}/> : '' }
          </div>

          <div className={personStatusClass}>
            <div className="person-status__tooltip">
              {status}
            </div>
          </div>

          <div className="person__name">
            {name}
          </div>
        </div>
      </div>
    );
  }
}

Applicant.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  approved: PropTypes.number,
  rejected: PropTypes.number,
  status: PropTypes.string,
  hasImg: PropTypes.bool,
  statusChange: PropTypes.func
};

Applicant.defaultProps = {
  id: 1,
  name: '',
  approved: 0,
  rejected: 0,
  status: 'unseen',
  hasImg: false,
  statusChange: () => {}
};

module.exports = Applicant;
