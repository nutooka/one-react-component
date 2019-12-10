//Require
var React = require('react');
var ReactDOM = require('react-dom');
var Applicant = require('Applicant');
require("./scss/main.scss");

//Code
ReactDOM.render(
	<div>
		<Applicant id="001" name="leonardo dicaprio" approved="95" rejected="5" status="unseen" hasImg="true"/>
		<Applicant id="002" name="mila kunis" approved="6" rejected="1" status="unseen" hasImg="true"/>
		<Applicant id="003" name="robert de niro" approved="4" rejected="2" status="seen" hasImg="true"/>
		<Applicant id="004" name="julia roberts" approved="2" rejected="3" status="unseen" hasImg="true"/>
		<Applicant id="005" name="daenerys targaryen" approved="1" rejected="3" status="seen" hasImg="true"/>
		<Applicant id="006" name="jack nicholson" approved="0" rejected="4" status="seen" hasImg="true"/>
		<Applicant id="007" name="rick sanchez" approved="0" rejected="0" status="unseen" hasImg="false"/>	
	</div>,
	document.getElementById('app')
);
