var name = "Ulises Cabrera"; // create variable with name
var role = "Web Developer and Designer"; // create variable with my role

var formattedName = HTMLheaderName.replace('%data%',name); // replace content on the template with name
var formattedRole = HTMLheaderRole.replace('%data%', role); // replace content on the template with role

$('#header').prepend(formattedRole); //append role on the headers
$('#header').prepend(formattedName); // prepend name on the header

var bio = {
    "name" : name,
    "role" : role,
    "contact info" : {
        "E-Mail" : "ucabrera@outlook.com",
        "Phone" :  "347-369-3657",
        "Github" : "elgris12",
        "Google Pus" : "Ulises Cabrera",
        "LinkedIn" : "Ulises Cabrera",
        "Location" : "New York"
    },
    "Picture" : "https://lh4.googleusercontent.com/-MFKmNuiPZIs/VW9Iu9oioMI/AAAAAAAAAls/xkvhAPDhWJ4/w718-h717/20140419_201830824_iOS.jpg",
    "Welcome Message" : "Welcome to my profile, please feel free to look around and if you are insterested on working with me, contact me!",
    "skills" :  ["HTML 5", "Javascript", "CSS 3", "Adobe Suite" ]
};

var education = {
    "Schools" : [
        {
            "name" : "University Of The People",
            "dates" : "2015 - Present",
            "location" : "Online",
            "major" : "Computer Science",
            "degree" : "Bachelors",
            "url" : "http://uopeople.edu/"
        },
        {
            "name" : "New York Institute of English and Business",
            "dates" : "2012-2013",
            "location" : "New York City",
            "major" : "Computerized Apllications",
            "degree" : "Certificate",
            "url" :  "http://nyieb.org/"

        } 
    ],
    "Online Courses" : [
        {
            "School" : "Udaticy",
            "dates" : "2015 -  Present",
            "title" : "Front-End Nanodegree",
            "url" :    "https://www.udacity.com/"
        }
    ]
};

var work = {
    "jobs" : [ 
        {
            "employer" : "NewBay Media LCC", 
            "title" : "Fullfilment Coordinator",
            "dates" : "2011 - Present",
            "location" : "New York City",
            "description" : " -Print orders <br> -Updating Reports <br> -Invoices coding and log <br/> -Customer Service          <br/> -E-Mails deployments"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Print Ads",
            "dates" : 2015,
            "description" : "Created print designs for Music Magazines",
            "images" : ["URL","URL"]
        },
        {
            "title" : "Banners Ads",
            "dates" : 2015,
            "description" : "Created various banners ads to promote events and subscriptions",
            "images" : ["URL","URL"]
        },
        {
            "title" : "HTML Responsive Emails",
            "dates" : 2015,
            "description" : "Build HTML Newsletters and Marketing Emails",
            "images" : ["URL", "URL"]
        }
    ]
};






/* Bio info starts
var formattedContactGeneric =  HTMLcontactGeneric.replace('%data%', bio["Contact info"]);
var formattedMobile = HTMLmobile.replace('%data%', bio["Contact info"].Phone);
var formattedEmail = HTMLemail.replace('%data%', bio["Contact info"]["E-Mail"])
var formattedBioPic = HTMLbioPic.replace('%data%', bio.Picture);
var formattedWlcMsg = HTMLwelcomeMsg.replace('%data%', bio["Welcome Message"]);
var formattedGooglePlus = HTMLgooglePlus.replace('%data%', bio["Contact info"]["Google Pus"]);
var formattedGitHub = HTMLgithub.replace('%data%', bio["Contact info"].Github);
var formattedLinkedIn = HTMLlinkedIn.replace('%data%', bio["Contact info"].LinkedIn);
 Bio info ends */

/*work section starts

var formattedWorkDates = HTMLworkDates.replace('%data%', work.dates);
var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.employer);
var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.location);
var formattedWorkTitle = HTMLworkTitle.replace('%data%', work["current position"]);
var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.description);


$('#workExperience').append(HTMLworkStart);
var $workSection = $('#workExperience div');
$workSection.prepend(formattedWorkEmployer + formattedWorkTitle);
$workSection.append(formattedWorkDates);
$workSection.append(formattedWorkLocation);
$workSection.append(formattedWorkDescription);

work section ends */

