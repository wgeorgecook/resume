/*
This is empty on purpose! Your code to build the resume will go here.
 */

 const bio = function() {
    name : string
    role : string
    contacts : an object with
          mobile: string
          email: string
          github: string
          twitter: string (optional)
          location: string
    welcomeMessage: string
    skills: array of strings
    biopic: string url
    display: function taking no parameters
 }

 const education = function() {
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

 const work = function() {
    jobs: array of objects with
        employer: string
        title: string
        location: string
        dates: string (Can be 'in progress')
        description: string
    display: function taking no parameters
 }

 const projects = function() {
    projects: array of objects with
        title: string
        dates: string (works with a hyphen between them)
        description: string
        images: array with string urls
    display: function taking no parameters
 }