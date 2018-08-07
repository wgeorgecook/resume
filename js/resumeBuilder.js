/*
This is empty on purpose! Your code to build the resume will go here.
 */

const bio = {
    name: "William George Cook",
    role: "Access administrator",
    contacts: {
        mobile: "224-200-8895",
        email: "wgeorgecook@gmail.com",
        github: "https://www.github.com/wgeorgecook",
        twitter: "@wgeorgecook",
        location: "Placerville, CA"
    },
    welcomeMessage: "Thanks for stopping by!",
    skills: ["Python", "Javascript", "HTML/CSS"],
    biopic: "https://pbs.twimg.com/profile_images/968694136713826304/Qo7sgROq_400x400.jpg",
    display: function() {
        this.skills.forEach( function(item){
            console.log(item)
        })
    }
};

const education = {
    schools: [
        {
            name: "Bethel College",
            location: "Mishawaka, Indiana",
            degree: "Not applicable",
            majors: ["Biology"],
            dates: "September 2009 - May 2011",
            url: "https://www.bethelcollege.edu",

        },
        {
            name: "Indiana University South Bend",
            location: "South Bend, Indiana",
            degree: "Not applicable",
            majors: ["New Media"],
            dates: "September 2011 - May 2012",
            url: "https://www.iusb.edu",

        },
        {
            name: "Columbia College",
            location: "Chicago, Illinois",
            degree: "Not applicable",
            majors: ["Film and Video"],
            dates: "September 2012 - May 2013",
            url: "https://www.colum.edu",

        },
        {
            name: "University of Wisconsin - Parkside",
            location: "Kenosha, Wisconsin",
            degree: "Bachelor of Science",
            majors: ["Biology"],
            dates: "September 2014 - May 2015",
            url: "https://www.uwp.edu",

        },

    ],
    onlineCourses: [
        {
            title: "Front End Nano Degree",
            school: "Udacity",
            dates: "January 2018 - October 2018",
            url: "https://www.udacity.com"
        }
            ],
    display: function() {
        this.onlineCourses.forEach(function(item) {
            console.log(item);
        })
    }
};

 const work = {
        jobs: [
            {
                employer: "Tek Systems",
                title: "Access Administrator",
                location: "Rancho Cordova, California",
                dates: "February 2018 - Present",
                description: "Provision application and network account access. Moderate Powershell scripting",
            }
        ],
        display: function() {
            this.jobs.forEach(function(item) {
                console.log(item);
            })
        }
 };

const projects = {

        projects: [
            {
                title: "Pixel Art Maker",
                dates: "January 2018",
                description: "Make your own pixel art with this front end web app",
                images: ["https://www.google.com"],
            },
            {
                title: "Memory Game",
                dates: "March 2018",
                description: "Match cards to win the game!",
                images: ["https://www.google.com"],
            },
            {
                title: "Frogger Clone",
                dates: "June 2018",
                description: "Avoid the bugs and make it to the water!",
                images: ["https://www.google.com"],
            }
        ],
        display: function() {
            this.projects.forEach(function(item) {
                console.log(item);
            })
        }
 };