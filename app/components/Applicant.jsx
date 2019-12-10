		/*--------------------------------------------------------------------
								REQUIRE
		--------------------------------------------------------------------*/
var React = require('react');
var classNames = require('classnames');

		/*--------------------------------------------------------------------
		COMPONENT BEGINS, GET DEFAULT PROPS, GET INITIAL STATE, OTHER FUNCTIONS
		--------------------------------------------------------------------*/

var Applicant = React.createClass({
	getDefaultProps: function() {
		return {
			id: '',
			name: 'Applicant',
			approved: 0,
			rejected: 0,
			status: 'Unseen',
			hasImg: false
		};
	},
	getInitialState: function() {
		return {
			id: this.props.id,
			name: this.props.name,
			approved: this.props.approved,
			rejected: this.props.rejected,
			status: this.props.status,
			hasImg: this.props.hasImg
		}
	},
	isBetween: function(value, interval) {
		var value = value;
		var interval = interval;

		if (interval[0] >= value && value >= interval[1]) {
			return true;
		} else {
			return false;
		}
	},
	imgPath: function() {
		var hasImg = this.state.hasImg;
		if (hasImg === "true") {
			var img = '/img/' + this.state.name + '.jpg';
			return img;
		}
		return '';
	},
	isUnseen: function() {
		var status =  this.state.status;
		if (status === "seen") {
			return false;
		} else {
			return true;
		}
	},
	isNotRecorded: function() {
		var votesYes = Number(this.state.approved);
		var votesNo = Number(this.state.rejected);
		if (votesYes === 0 && votesNo === 0) {
			return true;
		} else {
			return false;
		}
	},
	calcPercentage: function() {
		var votesYes = Number(this.state.approved);
		var votesNo = Number(this.state.rejected);
		var votesAll = votesYes + votesNo;
		var percentage;	
		if (votesAll !== 0) {
			percentage = votesYes / votesAll;
			percentage = percentage.toFixed(2) * 100;
			return percentage;
		}	
		return '';
	},
	statusChange: function() {
		var id = this.state.id;
		var name = this.state.name;
		localStorage.setItem('id-'+id, JSON.stringify(name));
		this.setState({
			status : 'seen'  
		});
	},
		/*--------------------------------------------------------------------
								RENDER BEGINS
		--------------------------------------------------------------------*/
	
	render: function() {
		var name = this.state.name;
		var votesYes = Number(this.state.approved);
		var votesNo = Number(this.state.rejected);
		var status =  this.state.status;
		var interval = [[100,90],[89,70],[69,50],[49,30],[29,10],[9,0]];
		var img = this.imgPath();
		var percentage = this.calcPercentage();
		var percentageString = '';
		var dataTitle;
		var dataText;
		
		if (this.isNotRecorded()) {
			dataTitle = 'Not recorded yet';
			dataText = '';
		}	else {
			dataTitle = 'Votes';
			dataText = votesYes + ' yes : ' + votesNo + ' no';
			percentageString = percentage + '%';
		}
		
	
		/*--------------------------------------------------------------------
								CHANGING CLASSES
		--------------------------------------------------------------------*/
		
		var applicantVotesClass = classNames({
			'applicant__votes': true,
			'applicant__votes--100': this.isBetween(percentage,interval[0]),
			'applicant__votes--80': this.isBetween(percentage,interval[1]),
			'applicant__votes--60': this.isBetween(percentage,interval[2]),
			'applicant__votes--40': this.isBetween(percentage,interval[3]),
			'applicant__votes--20': this.isBetween(percentage,interval[4]),
			'applicant__votes--0': this.isBetween(percentage,interval[5]),
			'applicant__votes--x': this.isNotRecorded()
		});
		
		var personStatusClass = classNames({
			'person__status': true,
			'person__status--unseen': this.isUnseen()
		});
		
		var dataTitleClass = classNames({
			'data__title':true,
			'data__title--with-margin': !this.isNotRecorded(),
			'data__title--no-margin': this.isNotRecorded()
		});
		
		var dataTextClass = classNames({
			'data__text':true,
			'data__text--show': !this.isNotRecorded(),
			'data__text--hide': this.isNotRecorded()
		});
		
		
		/*--------------------------------------------------------------------
									RETURN
		--------------------------------------------------------------------*/
		
		return (
			<div className="applicant" onClick={this.statusChange}>
			
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
						<img className="person-img__img" src={img} alt={name}/>
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
});

		/*--------------------------------------------------------------------
									EXPORTS
		--------------------------------------------------------------------*/

module.exports = Applicant;
