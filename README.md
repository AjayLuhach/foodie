Foodie app
:first install node,then go to foodie/server folder and npm install all packages by npm i command.
MongoDB Database Setup
Install MongoDB:

If you haven't installed MongoDB, Install MongoDB

Start MongoDB Server:
  this may vary ,so search for your specific system like windows,linux,mac etc.

Open a terminal and start the MongoDB server. The exact command might vary based on your installation method, but for a default installation, it's often:

mongod

Leave this terminal window running to keep the MongoDB server running.

Open Another Terminal:

Open another terminal window, leaving the MongoDB server running in the background.

Connect to MongoDB:

Connect to the MongoDB server using the mongo shell and run this command:
create  db.createUser({ user: 'foodie', pwd: 'foodie', roles: ['readWrite'] })

now good to go.

Go to code folder foodie/server in terminal and run below command:
 node server.js

after this use live server to go live.



clone from below link:-
https://github.com/AjayLuhach/foodie.git