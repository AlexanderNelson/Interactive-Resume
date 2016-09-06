//bio info
var bio = {
  "name": "Alexander Nelson",
  "role": "Creator",
  "contacts":
  {
    "mobile" : "555-555-5555",
    "email" : "AmVetServ@gmail.com",
    "github": "AlexanderNelson",
    "twitter" : "myTweet",
    "location" : "New York"
  },
  "welcomeMessage": "Tree Fiddy?!",
  "skills": [
    "Android Development", "Web Development", "Remote Pilot", "Material Design"
      ],
  "bioPic": "images/me300.jpg"
};

//display bio info
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLoc);
$("#footerContacts").append(formattedLoc);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

//display skills
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

//education
var education = {
  "schools": [
    {
      "name": "Udacity",
      "location": "New York",
      "degree": "Front End Nanodegree",
      "major": ["CS", " Web Development"],
      "dates": 2016,
      "url": "https://www.udacity.com/"
    },
    {
      "name": "FlatIron School",
      "location": "New York",
      "degree": "Intro to Ruby",
      "major": ["CS", " Web Development"],
      "dates": 2016,
      "url": "https://flatironschool.com/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/"
    }
  ]
};

//display education info
function displayEducation() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
    $(".education-entry:last").append(formattedURL);
  }

  $("#education").append(HTMLonlineClasses);
  for (school in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
    var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedSchoolTitle);
    var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
    $(".education-entry:last").append(formattedOnlineDate);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
    $(".education-entry:last").append(formattedURL);
  }
};
displayEducation();

//work info
var work = {
  "jobs": [
  {
    "employer": "AmVet Services",
    "title": "Owner",
    "location" : "New York",
    "dates": "February 2014 - Present",
    "description": "Consultation and solutions in technology, staffing, training and planning for the architecture, engineering, construction and environmental preservation industries."
// Responsible for providing timely and organized solutions to clients through team and product selection, development and implementation while maintaining and improving the core values of the business.
// Development and presentation of impact mitigation plans for residential and governmental review.
// Neutral 3rd party inspection/documentation for protection of residential, commercial, historical  and landmark  properties, sensitive electronics,  and protected environments  for preservation and aid in litigation.
// Provide service to multiple projects in urban and rural areas locally or internationally while monitoring and consulting remotely.
// Service extending to the training of operation, setup and customized fabrication requirements for automated 24/7 monitoring and reporting of network, A/V, vibration, sound and air quality equipment.
// Provide training, connectivity and consulting for automated monitoring and reporting through wireless equipment including Sierra Wireless cellular and GPS modems.
  },
  {
    "employer": "Fiberlink Technologies Inc.",
    "location" : "Arizona",
    "title": "Fiber Optic Outside Plant Manager",
    "dates": "2001-2003",
     "description": "Provided management and planning for the development and operation of the company’s fiber optic network installation, splicing and testing services throughout the western United States."
//         Successfully managed all assigned projects to meet company, customer and property owner expectations.
// Prepared reports and presentations describing activity, project status and splicing/testing results for senior management and clients ensuring outcome met standards outlined in contracts.
// Oversee, train and direct technicians on procedures for fusion splicing, testing, data management and reporting using OTDR testers, VFL and  various models of fusion splicers.
// Knowledgeable of various forms of fiber cabling to include Multimode & Singlemode, loose tube and ribbon with various connector styles (SC,FC,ST,LC & MTRJ).
    }
  ]
};

//display work info
function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};
displayWork();

//project info
var projects = {
  "projects": [
  {
    "title": "Tribute to Granny D",
    "dates": "2016",
    "description": "This is a webpage to pay tribute to the remarkable woman who saved a fishing village in Alaska and walked across the United States for campaign finance reform",
    "images": [
    "https://s31.postimg.org/7aeis6y17/Screenshot_2016_07_26_at_10_20_41.png",
    "https://s32.postimg.org/is3xchoqt/grannyd2.png"
      ]
    },
    {
    "title": "Web Portfolio",
    "dates": "2016",
    "description": "This is a webpage used to exercise html, css and bootstrap. The portfolio will showcase accomplishments, demo techniques and evolve through feedback, exploration and creativity.",
    "images": [
    "https://s31.postimg.org/738zhjvob/Web_Portfolio_Snip.png",
    "https://s4.postimg.org/r1tb4ug25/webportfolio2_sml.jpg"
      ]
    }
  ]
};

//display project info
function displayProjects() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = (HTMLprojectTitle.replace("%data%", projects.projects[project].title)).replace("#",projects.projects[project].titleURL);
    $(".project-entry:last").append(formattedTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);
     if (projects.projects[project].images.length>0) {
      for (image in projects.projects[project].images) {
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};
displayProjects();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);


$("#mapDiv").append(googleMap);