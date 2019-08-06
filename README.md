# vue-mongo-express-node app  

## Live Version here:  
https://warm-bayou-66433.herokuapp.com/

# Steps to run
1. unzip this directory and cd into it
2. run `npm install` in root directory
3. `cd client/` and rrun `npm install` again to install frontend dependencies
4. navigate back to root directory `cd ..`
5. run `npm run dev` which will start both frontend and backend ports together
6. navigate to `localhost:8080`

## Backend development 
1. Backend for this app was developed using node and express. 
2. Here only one endpoint was needed to fetch data
3. Followed production level architecture
    - keys are stored separately for dev and prod.
    - prod keys in this case is stored in heroku app
4. Inside `server/index.js` production routes are handled even though it wasa not necessary for this app
5. One useful package I found was `concurrently` which lets you run both backend and frontend ports simultaneously

#### Challenges in backend
1. Took a bit to figure out correct mongo string for application connect
2. Researched into best practices for such backend design which proved useful

## Frontend Developement
1. This consists of vue.js app created via vue cli
2. Implemented Vuex store for state management even though it was not needed for an app this small
3. design consisted of 2 bigger views to show list and charts.
4. Bootstrap is used for much of styling and for responsive design

#### Challenges in frontend
1. Configuring chart.js to generate doughnut charts took quite sometime due to first time use
2. setting up proxy for api endpoint to hit server port without specifying `localhost` in the url