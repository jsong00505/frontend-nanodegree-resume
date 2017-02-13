/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var awesomeThought = "I am jsong and I am AWESOME";
var funThought = awesomeThought.replace("AWESOME", "FUN");
$("#header").append("jsong");
$("#main").append(funThought);
*/

/*
var name = "JUN SONG";
var role = "Software Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

//var skills = ["Java", "Python", "JavaScript", "PHP", "SQL", "Git"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);

/*
var work = {};
work.postion = "Software Developer";
work.employer = "NICE Payments";
work.years = 3;
work.city = "Seoul"

var education = {};
education["name"] = "Soongsil University";
education["years"] = "2007-2015";
education["city"] = "Seoul";
*/

var bio = {
	"name": "jsong",
	"role": "Software Developer",
	"contacts": {
		"email":"jsong00505@gmail.com",
		"mobile": "+82-10-5763-7050",
		"github": "jsong",
		"twitter": "jsong00505",
		"location": "Incheon"
	},
	"bioPic": "images/me.jpg",
	"welcomeMessage": "Hello, there!",
	"skills": [
		"Java", "Python", "JavaScript", "PHP", "SQL", "Git"
	]
};

var work = {
	"jobs": [
		{
			"employer": "NICE Payments",
			"title": "Software Developer",
			"location": "Seoul",
			"dates": "Dec/2014 - Jul/2016",
			"description": ""
		},
		{
			"employer": "NICE Payments",
			"title": "Software Developer",
			"location": "Seoul",
			"dates": "Aug/2016 - Current",
			"description": ""
		}
	]
};


var education = {
	"schools": [
		{
			"name": "Soongsil University",
			"location": "Seoul",
			"degree": "BA",
			"years": "Mar/2007 - Feb/2015",
			"major": ["CS"],
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"name": "Udacity",
			"degree": "VR Nanodegree",
			"years": "Aug/2016 - Current",
			"url": "https://www.udacity.com"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": [""]
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedwelcomeMsg);
$("#header").append(formattedEmail);
$("#header").append(formattedbioPic);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(var i in bio.skills) {
		var formmatedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formmatedSkill);
	}
}