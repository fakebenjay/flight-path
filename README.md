Flight Path is Devin Rieger, Ben Jay, and Ian Boynton's final project for The Flatiron School's Fullstack Web Development Program. 

Demo available at http://flight-path.surge.sh/

Technologies Used 

-React.js

-Redux

-React Router (with protected routes)

-JWT Authentication

-Ruby on Rails

-bcrpyt

-PostgreSQL

-Bootstrap/CSS

-Credit to Shaw at Codepen for the Login/Register backgrounds (https://codepen.io/shshaw/pen/DxJka)


About Flight Path

Flight Path is a trip-planning application that allows users to plan a trip with friends and build a shared itinerary. Utilizing the Google Places API, users are able to plan a trip to any city in the world with any other Flight Path user(s). 

Once a trip has been planned, all members of that that group share a trip-dashboard where user’s can search potential activities and add them to the trip’s planned activities. Potential activities are fetched from the Google Places API, along with the most relevant photo for that attraction. Default parameters ‘top attractions’ and 25km are used to generate the initial state, providing users the ability to browse some of the most popular destinations, but can be refined with user inputted keyword and/or radius. 

In deciding on potential activities, users can click the activity tiles header to display more information about that activity, including rating and a link to a Google Map’s pin for that location. Once a trip has been planned, trip members can comment on the activities. 

The user who initially plans the trip is given administrator rights over the group, enabling them to remove activities, delete the trip, or leave the group, providing them the option to transfer ownership of the trip to another of its’ members. Standard group members also have the ability to leave the trip. 

JWT authentication is used in conjunction with React Router to provide security, in addition to bcrypt password management.

