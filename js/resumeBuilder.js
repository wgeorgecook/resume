/*
This is empty on purpose! Your code to build the resume will go here.
 */

 class Bio {
     constructor() {
        this.name = "William George Cook"
        this.role = "Access administrator"
        this.contacts = {
            mobile: "224-200-8895",
            email: "wgeorgecook@gmail.com",
            github: "https://www.github.com/wgeorgecook",
            twitter: "@wgeorgecook",
            location: "Placerville, CA"
        }
        this.welcomeMessage = "Thanks for stopping by!"
        this.skills = ["Python", "Javascript", "HTML/CSS"]
        this.biopic = "https://pbs.twimg.com/profile_images/968694136713826304/Qo7sgROq_400x400.jpg"
        this.display = function() {}
     }
 }


 class Education {
     constructor() {
        this.schools = [
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

        ]
        this.onlineCourses = [
            {
                title: "Front End Nano Degree",
                school: "Udacity",
                dates: "January 2018 - October 2018",
                url: "https://www.udacity.com"
            }
                ]
        this.display = function() {}
     }
 }

/*
 class Work {
     constructor() {
        jobs: array of objects with
            employer: string
            title: string
            location: string
            dates: string (Can be 'in progress')
            description: string
        display: function taking no parameters
     }
 }

 class Projects {
     constructor() {
        projects: array of objects with
            title: string
            dates: string (works with a hyphen between them)
            description: string
            images: array with string urls
        display: function taking no parameters
     }
 }
 */