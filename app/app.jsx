var React = require('react');
var ReactDOM = require('react-dom');
var ApplicantList = require('ApplicantList');
require("./scss/main.scss");

ReactDOM.render(
	<div>
		<ApplicantList/>
	</div>,
	document.getElementById('app')
);
