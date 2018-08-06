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

 /*
 class Education {
     constructor() {
        schools: array of objects with
            name: string
            location: string
            degree: string
            majors: array of strings
            dates: string (works with a hyphen between them)
            url: string (optional)
        onlineCourses: array of objects with
            title: string
            school: string
            dates: string (works with a hyphen between them)
            url: string
        display: function taking no parameters
     }
 }

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