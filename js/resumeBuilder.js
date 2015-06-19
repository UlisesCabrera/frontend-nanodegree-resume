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
bio.display = function() {
	var formattedContactGeneric =  HTMLcontactGeneric.replace('%data%', bio["contact info"]);
	var formattedMobile = HTMLmobile.replace('%data%', bio["contact info"].Phone);
	var formattedEmail = HTMLemail.replace('%data%', bio["contact info"]["E-Mail"])
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.Picture);
	var formattedWlcMsg = HTMLwelcomeMsg.replace('%data%', bio["Welcome Message"]);
	var formattedGooglePlus = HTMLgooglePlus.replace('%data%', bio["contact info"]["Google Pus"]);
	var formattedGitHub = HTMLgithub.replace('%data%', bio["contact info"].Github);
	var formattedLinkedIn = HTMLlinkedIn.replace('%data%', bio["contact info"].LinkedIn);

	$('#topContacts').append(formattedMobile)
		.append(formattedEmail)
		.append(formattedGitHub)
		.append(formattedLinkedIn);
	$('#header').append(formattedBioPic)
		.append(formattedWlcMsg)
		.append(HTMLskillsStart);

	if (bio.skills) {
		for (skill in bio.skills) {
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[skill]);
			$('#header').append(formattedSkills);
		};
	}
}


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
        },
        {
            "employer" : "Conway Stores", 
            "title" : "Assistant Manager",
            "dates" : "2006 - 2011",
            "location" : "Bronx",
            "description" : " Helped manager with daily duties"
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

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';



bio.display();

// Bio info starts


// Bio info ends

//work section starts
function displayWork() {
    for (job in work.jobs){
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
    };   
}

displayWork();


//work section ends

$('#main').append(internationalizeButton);
function inName(name) {
	name = $('#name').text();
	var arrayOfNames = name.split(" ");
	var lastName = arrayOfNames[1].toUpperCase();
	var firstName = arrayOfNames[0];
	var firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
	var fullName = firstName + ' ' + lastName;
	return fullName
}  //Internationalize Names function




$(document).click(function(loc) {
  // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
}); // Collecting Click locations




