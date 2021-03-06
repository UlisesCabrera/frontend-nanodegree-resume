"use strict";
var name = "Ulises Cabrera"; // create variable with name
var role = "Web Developer and Designer"; // create variable with my role

var bio = {
    "name" : name,
    "role" : role,
    "contacts" : {
        "e-mail" : "ucabrera@outlook.com",
        "phone" :  "347-369-3657",
        "github" : "elgris12",
        "google plus" : "Ulises Cabrera",
        "linkedIn" : "Ulises Cabrera",
        "location" : "Yonkers, NY"
    },
    "picture" : "https://lh4.googleusercontent.com/-MFKmNuiPZIs/VW9Iu9oioMI/AAAAAAAAAls/xkvhAPDhWJ4/w718-h717/20140419_201830824_iOS.jpg",
    "welcome message" : "Thank you for checking out my resume, let me know if I meet your requirements.",
    "skills" :  ["HTML 5", "Javascript", "CSS 3", "Adobe Suite" ]
}; // Bio info JSON

bio.display = function () {
    var formattedContactGeneric =  HTMLcontactGeneric.replace('%data%', bio.contacts);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.phone);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts["e-mail"]);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.picture);
    var formattedWlcMsg = HTMLwelcomeMsg.replace('%data%', bio["welcome message"]);
    var formattedGooglePlus = HTMLgooglePlus.replace('%data%', bio.contacts["google Plus"]);
    var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLinkedIn = HTMLlinkedIn.replace('%data%', bio.contacts.linkedIn);
    var formattedName = HTMLheaderName.replace('%data%', name); // replace content on the template with name
    var formattedRole = HTMLheaderRole.replace('%data%', role); // replace content on the template with role

    $('#header').prepend(formattedRole); //append role on the headers
    $('#header').prepend(formattedName); // prepend name on the header

    $('#topContacts').append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGitHub)
        .append(formattedLinkedIn);
    $('#footerContacts').append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGitHub)
        .append(formattedLinkedIn);	
    $('#header').append(formattedBioPic)
        .append(formattedWlcMsg)
        .append(HTMLskillsStart);

    if (bio.skills) {
        for (var skill in bio.skills) {
            var formattedSkills = HTMLskills.replace('%data%', bio.skills[skill]);
            $('#skills').append(formattedSkills);
        }
    }
}; // encapsulating display function to show bio info on page

var work = {
    "jobs" : [ 
        {
            "employer" : "NewBay Media LCC", 
            "title" : "Fulfillment Coordinator",
            "dates" : "2011 - Present",
            "location" : "New York, NY",
            "description" : " - Created HTML responsive e-mails using Zurb’s ink framework. <br> - Created subscription pages using Bootstrap and JavaScript. <br> - Managed various different types of reports. <br/> - Managed customer service for the all the magazine iTunes apps."
        },
        {
            "employer" : "Conway Stores", 
            "title" : "Assistant Manager",
            "dates" : "2006 - 2011",
            "location" : "Bronx, NY",
            "description" : " Helped manager with daily duties"
        }
    ]
}; // work info JSON

work.display = function() {
    for (var job in work.jobs){
        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

        $('#workExperience').append(HTMLworkStart);
        $('div.work-entry:last')
            .append(formattedWorkEmployer + formattedWorkTitle)
            .append(formattedWorkDates)
            .append(formattedWorkLocation)
            .append(formattedWorkDescription);
    } 
}; // encapsulating display function to show work info on page
var projects = {
    "projects" : [
        {
            "title" : "Print Ads",
            "dates" : 2015,
            "description" : "Created print designs for Music Magazines",
            "images" : ["./images/PrintDesignShowCase-small.jpg"]
        },
        {
            "title" : "Banners Ads",
            "dates" : 2015,
            "description" : "Created various banners ads to promote events and subscriptions",
            "images" : ["./images/BannerAdsShowCase-small.jpg"]
        },
        {
            "title" : "HTML Responsive Emails",
            "dates" : 2015,
            "description" : "Build HTML Newsletters and Marketing Emails",
            "images" : ["./images/HTMLEmailsShowCase-small.jpg"]
        }
    ]
}; // Project info JSON

projects.display = function() {
    for (var project in projects.projects) {
        var formattedProjectTitle =  HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        var formattedProjectDates =  HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        var formattedProjectDescription =  HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        var formattedProjectImage =  HTMLprojectImage.replace('%data%', projects.projects[project].images[0]);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedProjectTitle)
            .append(formattedProjectDates)
            .append(formattedProjectImage)
            .append(formattedProjectDescription);
    }
}; // encapsulating display function to show work info on page

var education = {
    "schools" : [
        {
            "name" : "University Of The People",
            "dates" : "2015 - Present",
            "location" : "Pasadena,CA",
            "major" : "Computer Science",
            "degree" : "Bachelors",
            "url" : "http://uopeople.edu/"
        },
        {
            "name" : "New York Institute of English and Business",
            "dates" : "2012-2013",
            "location" : "New York, NY",
            "major" : "Computer Applications",
            "degree" : "Certificate",
            "url" :  "http://nyieb.org/"

        } 
    ],
    "Online Courses" : [
        {
            "school" : "Udacity",
            "dates" : "2015 -  Present",
            "title" : "Front-End Nanodegree",
            "url" :    "https://www.udacity.com/"
        }
    ]
}; // Education info JSON

education.display = function() {
    for (var school in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree)
            .append(formattedSchoolDates)
            .append(formattedSchoolLocation)
            .append(formattedSchoolMajor);
    }
    $('#education').append(HTMLonlineClasses);

    for (school in education["Online Courses"])	{
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education["Online Courses"][school].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education["Online Courses"][school].school);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education["Online Courses"][school].dates);
        var formattedOnlineURL = HTMLonlineURL.replace('%data%', education["Online Courses"][school].url);
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool)
            .append(formattedOnlineDates)
            .append(formattedOnlineURL);	
    }
};// encapsulating display function to show education info on page

bio.display();
work.display();
projects.display();
education.display();
// display resume info

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);