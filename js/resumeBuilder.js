//bio info
var bio = {
  "name": "Alexander Nelson",
  "role": "Creator",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "AmVetServ@gmail.com",
    "github": "AlexanderNelson",
    "twitter": "myTweet",
    "location": "New York"
  },
  "welcomeMessage": "Tree Fiddy?!",
  "skills": [
    "Android Development", "Web Development", "Remote Pilot", "Material Design", "andthisone"
  ],
  "biopic": "images/me300.jpg"
};

//Shorten "%data%" to dat
var dat = "%data%";

//display bio info
bio.display = function() {
  var formattedName = HTMLheaderName.replace(dat, bio.name);
  var formattedRole = HTMLheaderRole.replace(dat, bio.role);
  $("#header").prepend(formattedName, formattedRole);
  var formattedMobile = HTMLmobile.replace(dat, bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace(dat, bio.contacts.email);
  var formattedGithub = HTMLgithub.replace(dat, bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace(dat, bio.contacts.twitter);
  var formattedLoc = HTMLlocation.replace(dat, bio.contacts.location);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace(dat, bio.welcomeMessage);
  var formattedBiopic = HTMLbioPic.replace(dat, bio.biopic);
  $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLoc);
  $("#header").append(formattedWelcomeMsg, formattedBiopic);

  //display skills
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace(dat, (skill));
    $("#skills").append(formattedSkill);
  });
};
bio.display();

//education
var education = {
  "schools": [{
    "name": "Udacity",
    "location": "New York",
    "degree": "Front End Nanodegree",
    "majors": ["CS", "Web Development"],
    "dates": "2016",
    "url": "https://www.udacity.com/"
  }, {
    "name": "FlatIron School",
    "location": "New York",
    "degree": "Intro to Ruby",
    "majors": ["CS", "Web Development, andthisone"],
    "dates": "2016",
    "url": "https://flatironschool.com/"
  }],
  "onlineCourses": [{
    "title": "JavaScript Syntax",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/"
  }]
};

//display education info
education.display = function() {
  $("#education").append(HTMLschoolStart);
  education.schools.forEach(function(school) {
    var formattedName = HTMLschoolName.replace(dat, school.name);
    var formattedLocation = HTMLschoolLocation.replace(dat, school.location);
    var formattedSchoolDates = HTMLschoolDates.replace(dat, school.dates);
    var formattedMajors = HTMLschoolMajor.replace(dat, school.majors.join(", "));
    var formattedDegree = HTMLschoolDegree.replace(dat, school.degree);
    var formattedCourse = formattedName + formattedDegree;
    var formattedURL = HTMLonlineURL.replace(dat, school.url);
    $(".education-entry:last").append(formattedLocation, formattedMajors, formattedCourse, formattedSchoolDates, formattedURL);
  });

  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineSchool = HTMLonlineSchool.replace(dat, onlineCourses.school);
    var formattedOnlineTitle = HTMLonlineTitle.replace(dat, onlineCourses.title);
    var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
    var formattedOnlineDate = HTMLonlineDates.replace(dat, onlineCourses.dates);
    var formattedURL = HTMLonlineURL.replace(dat, onlineCourses.url);
    $(".education-entry:last").append(formattedSchoolTitle, formattedOnlineDate, formattedURL);
  });
};
education.display();

//work info
var work = {
  "jobs": [{
    "employer": "AmVet Services",
    "title": "Owner",
    "location": "New York",
    "dates": "February 2014 - Present",
    "description": "Consultation and solutions in technology, staffing, training and planning for the architecture, engineering, construction and environmental preservation industries."
      // Responsible for providing timely and organized solutions to clients through team and product selection, development and implementation while maintaining and improving the core values of the business.
      // Development and presentation of impact mitigation plans for residential and governmental review.
      // Neutral 3rd party inspection/documentation for protection of residential, commercial, historical  and landmark  properties, sensitive electronics,  and protected environments  for preservation and aid in litigation.
      // Provide service to multiple projects in urban and rural areas locally or internationally while monitoring and consulting remotely.
      // Service extending to the training of operation, setup and customized fabrication requirements for automated 24/7 monitoring and reporting of network, A/V, vibration, sound and air quality equipment.
      // Provide training, connectivity and consulting for automated monitoring and reporting through wireless equipment including Sierra Wireless cellular and GPS modems.

  }, {
    "employer": "Fiberlink Technologies Inc.",
    "location": "Arizona",
    "title": "Fiber Optic Outside Plant Manager",
    "dates": "2001-2003",
    "description": "Provided management and planning for the development and operation of the company’s fiber optic network installation, splicing and testing services throughout the western United States."
      //         Successfully managed all assigned projects to meet company, customer and property owner expectations.
      // Prepared reports and presentations describing activity, project status and splicing/testing results for senior management and clients ensuring outcome met standards outlined in contracts.
      // Oversee, train and direct technicians on procedures for fusion splicing, testing, data management and reporting using OTDR testers, VFL and  various models of fusion splicers.
      // Knowledgeable of various forms of fiber cabling to include Multimode & Singlemode, loose tube and ribbon with various connector styles (SC,FC,ST,LC & MTRJ).
  }]
};

//display work info
work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace(dat, job.employer);
    var formattedTitle = HTMLworkTitle.replace(dat, job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace(dat, job.dates);
    var formattedLocation = HTMLworkLocation.replace(dat, job.location);
    var formattedDescription = HTMLworkDescription.replace(dat, job.description);
    $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
  });
};
work.display();

//project info
var projects = {
  "projects": [{
    "title": "Tribute to Granny D",
    "dates": "2016",
    "description": "This is a webpage to pay tribute to the remarkable woman who saved a fishing village in Alaska and walked across the United States for campaign finance reform",
    "images": [
      "https://s31.postimg.org/7aeis6y17/Screenshot_2016_07_26_at_10_20_41.png",
      "https://s32.postimg.org/is3xchoqt/grannyd2.png"
    ]
  }, {
    "title": "Web Portfolio",
    "dates": "2016",
    "description": "This is a webpage used to exercise html, css and bootstrap. The portfolio will showcase accomplishments, demo techniques and evolve through feedback, exploration and creativity.",
    "images": [
      "https://s31.postimg.org/738zhjvob/Web_Portfolio_Snip.png",
      "https://s4.postimg.org/r1tb4ug25/webportfolio2_sml.jpg"
    ]
  }]
};

//display project info
projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace(dat, project.title);
    var formattedProjectDates = HTMLprojectDates.replace(dat, project.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace(dat, project.description);
    $(".project-entry:last").append(formattedTitle, formattedProjectDates, formattedProjectDescription);
    project.images.forEach(function(img) {
      image = HTMLprojectImage.replace(dat, img);
      $(".project-entry:last").append(image);
    });
  });
};
projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);