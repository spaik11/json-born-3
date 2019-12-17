# JSON Born 3 ("The JSON Ultimatum"?)


### Your Task

Make our little users manipulation app a `json-server` back end with a really REALLY basic browser front end.


### Setup

* Install `json-server` globally so that you can access it anywhere. Run `npm install -g json-server` in your terminal.
* Make two folders, one a backend and one a frontend. (Name them whatever you'd like.)
* In the backend folder, create a file called `db.json`. Populate it with our json from the last project, but with two key differences: the array should be enclosed within an object, with the key "users" leading to that array, and the "index" property on each user needs to be changed to an "id" property, so that `json-server` knows what property to handle for you.
* Now navigate to that folder in a terminal window or tab you set aside for this, and run `json-server --watch db.json`. Your server should start running, tell you what port it's listening on, and even tell you what resources it has (in this case just the route `/users`). We'll be able to keep an eye on this terminal any time we want to check in on what's happening with our server.
* Go into your frontend folder and create an `index.html` file and a `main.js` file for it to link to. Now link them up with a `<script>` tag.
* Now do that thing, with the help of the guidelines below.


### Guidelines

* You do NOT need any real front end to this. I recommend defining functions called `getUser` and `postUser` and such that merely console log the results, then calling only one of them at a time (commenting any others out if need be), reloading the page, and checking the console and the `db.json` file to see what happens.
* You should be able to get every single one of the "routes" you used before to be _actual_ routes. Delete, get, put, and post to your heart's content.
* Do your research, but here are a couple real sticklers:
  * Many requests don't need this, but _some_ need you to explicitly say that you're expecting JSON. Check out `xhr.setRequestHeader`, and make sure you're calling it _between_ `xhr.open` and `xhr.send`.
  * `xhr.send` can accept a parameter that's the data you want to send. You can put it in JSON format if you stringify an object first. Or you can use a param string, but that's not very JavaScript-y.