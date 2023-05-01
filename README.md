# CS648Module13Lab1
In this lab, you will get React to run within a Node web server running Express. To complete this lab, step through the following tasks:

You don't need to create a new folder for this lab. Just continue using the 'module01' folder that you used throughout the first module. Your first task will be to install Express.
Then, install 'nodemon' as a dev dependency.
Then, create a new file at the root of the module folder called 'app.js'.
Within app.js, add the necessary code to:
import express (make sure to add the 'type': 'module' property and value set within the package.json file.
create the express app
set the 'public' folder as a static folder
get the '/' route and have it load 'index.html' from the public folder
have the app listen on port 5000
Now, move the index.html file into the 'public' folder. You should have two files in this folder now: the index.html file and the employees.js file which is automatically created by Babel from the employees.jsx file.
Finally, add a new 'start' script within the package.json file that starts app.js with nodemon.
In order to test your application you will need two Terminal windows. One to 'watch' the Babel process and the other to start the web server using nodemon. Open your browser and browse to localhost:5000. Make sure your page loads and the list of employees displays. Now, go into your employees.jsx file, add a new employee to the list, and save your work. Assuming you don't receive any errors, go back to your browser and click refresh. Did the new employee appear? If yes, congratulations, you've completed the first lab!

To submit this lab, it will need to be pushed to your GitHub repo. You will need to create a .gitignore file before you do this. Place this file at the root of your project and just add an entry for the node_modules folder. This way the node_modules folder is ignored when you push your lab up to your GitHub repo. 

Post the link to your GitHub repo as the lab submission
