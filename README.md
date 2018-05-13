# FriendFinder

Friend Finder is built as a full-stack site aimed towards finding friends or used as a dating app. It takes user input with 10 predetermined questions that are then compared against answers from other users and matched based on compatibility.

## Getting Started

This is a fairly simple, step-by-step application that will walk you through with drop downs and easy to use buttons:

- When the user clicks on Go to Survey button, it redirects them to the survey page where the first two fields require user's name and a photo of themselves.

- Questions one through ten are one liners that can be answered by clicking on the drop-down menu bar and user chooses a number between one and five; one being Strongly Disagree and 5 Strongly Agree.

- When all questions have been answered user will click on the Submit button at the bottom of the page and after a few seconds a modal will pop up with the name and picture of the person they have been matched with.


### Prerequisites

There are no pre-requisites for the use of this application as it is responsive and runs on all mobile phones as well as all browsers.

### Installing

No installation is required to complete this survey.

### Break down into end to end tests

- When building this application the server.js file required npm packages such as express, body-parser, and path.

- html-routes.js file requires a GET route to  /survey to access the Survey page and a default USE route leading back and forth to the Home Page.

- api-routes.js requires a GET route with the URL /api/friends which is used to display a query of all possible matches.

- api-routes.js also requires a POST route to /api/friends which will handle the results of survey per user.

### Coding Style

- This application was created using arrays of objects that hold the hard-coded users and their preferences.

- This array is then converted into a simple array of numbers to compare current user's scores to pre-coded ones and add up th differences to calculate totalDifference.

- Once this runs, the modal will display on screen the current user's new match.

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Styling](https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css)
* [Bootstrap](https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css)
* [Fonts](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css)