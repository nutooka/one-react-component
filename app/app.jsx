const React = require('react');
const ReactDOM = require('react-dom');
const ApplicantList = require('ApplicantList');

require("./scss/main.scss");

ReactDOM.render(
	<div>
		<ApplicantList />
	</div>,
	document.getElementById('app')
);
