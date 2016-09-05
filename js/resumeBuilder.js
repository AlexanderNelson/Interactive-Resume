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
    "Android Development", "Web Development", "Remote Pilot", "Material Design", "andthisone"
      ],
  "biopic": "images/me300.jpg"
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
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);

//display skills
   $("#header").append(HTMLskillsStart);
bio.skills.forEach(function(skill) {
  var formattedSkill = HTMLskills.replace("%data%", (skill));
    $("#skills").append(formattedSkill);
});

//education
var education = {
  "schools": [
    {
      "name": "Udacity",
      "location": "New York",
      "degree": "Front End Nanodegree",
      "major": ["CS", " Web Development"],
      "dates": "2016",
      "url": "https://www.udacity.com/"
    },
    {
      "name": "FlatIron School",
      "location": "New York",
      "degree": "Intro to Ruby",
      "major": ["CS", " Web Development"],
      "dates": "2016",
      "url": "https://flatironschool.com/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/"
    }
  ]
};

//display education info
$("#education").append(HTMLschoolStart);
// function displayEducation() {
  education.schools.forEach(function(school) {
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedLocation);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedMajors = HTMLschoolMajors.replace("%data%", school.major);
    $(".education-entry:last").append(formattedMajors);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedCourse = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedCourse);
    var formattedURL = HTMLonlineURL.replace("%data%", school.url);
    $(".education-entry:last").append(formattedURL);
  }),

  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourses.school);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourses.title);
    var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedSchoolTitle);
    var formattedOnlineDate = HTMLonlineDates.replace("%data%", onlineCourses.dates);
    $(".education-entry:last").append(formattedOnlineDate);
    var formattedURL = HTMLonlineURL.replace("%data%", onlineCourses.url);
    $(".education-entry:last").append(formattedURL);
});
// displayEducation();

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
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
  })
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
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedProjectDescription);
    project.images.forEach(function(img) {
      image = HTMLprojectImage.replace("%data%", img);
    });
    $(".project-entry:last").append(image);
  })
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