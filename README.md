# ZeylnAPI-Hoster

<h2>A repository for hosting database APIs</h2>
You can use this code to host an API with your MariaDB database of choice.

This guide expects you to have MariaDB pre-installed and a database ready for use.

Steps to success:

## Step 1, Clone the repository
You must first clone the repo to your local machine, paste this script into your terminal: <br><br>
```
git clone git@github.com:Zeyln/ZeylnsGameLib.git
```

## Step 2, Dependencies

**``` Node.js ``` (Required)** <br>
**```Cors ``` (Required)**  <br>
```Nodemon ``` (Recommended)


Hosting your API with this tool requires that you have Node.js installed.  <br>  You can do this by following the steps on the website:
**https://nodejs.org/en/download**

After installing Node.js, while in your project directory run this in your terminal:
```
npm install cors --save
```
Nodemon install script (same directory):
```
npm install --save-dev nodemon
```
## Step 3, Configure the app
After you have installed the dependencies and the repo is cloned, you have to configure both the **app.js** and **dbconnector.js** files.

There are instructions on what to do within these files embedded as comments. 

ensure you have an understanding over the database, table, and collumn names, you will need to point towards these.

## Step 4, Run the app!
Run the app via npm, or run it with nodemon:
```
// vanilla node.js
npm run app.js

// nodemon, automatic updates
nodemon run app.js
```
