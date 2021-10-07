##Suppli Take Home Challenge

**This repo contains both client and server for the app.**
To start, please run the following scripts:
* npm i
* npm run start

Webpack will build automatically and open the app in browser with the server running in the background.

In a real world project, I would probably have more configuration for production, such as use more env variables, minifying bundle files, no devTool, dockerization 
for easy deployment, unit tests. 

A note is that we might not need to serve the actual github issues to the front end. We could just do all the counting in the backend and return the counted numbers instead.
Either way is valid.