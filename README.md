# EDULOCKER

Our website [**Edulocker.tech**](Edulocker.tech) aims to solve this real world problem by providing a common place for the parent and CBSE where fees can be paid directly under the supervision of CBSE and all the important certificates can be stored as well.

----
### This Project is a part of HackOdisha Hackathon 2021.
### Technologies Used

* Near Blockchain(https://near.org/)

* Node.js
***
## Environment Setup

Make sure that you have installed Node.js [watch this video to install Node.js](https://www.youtube.com/watch?v=__7eOCxJyow)

Also make sure you have PostgreSQL installed[Watch this video to install PostgreSQL](https://youtu.be/9lq74SafVcw)

### 1.Fork The Repo

### 2.Clone App

Make a new folder and open the terminal there.
-write the following commands and press enter.
```
$git clone  https://github.com/ <your-github-username>/Edulocker.git

```
and then move to the folder using this command:

````
 $ cd Edulocker

 ````
 #### 3.Install node packages


* Move inside the cloned folder with name client using this command

````
 $ cd client

 ````
 * While you are still inside the cloned folder, write the following command to run the website locally.

 ````
 $ npm install

 ````
* Come out of client directory and get inside the server folder
```
 $ cd ..
 $ cd server

 ````
 * Write the following command and press enter to download all required node modules.

````
$ npm install

````

 #### 4.Run Locally

 * While you are still inside the cloned folder, write the following command to run the website locally.

 ````
  $ npm run dev

  ````
 * Get out of server folder & get inside the client folder
 ```
  $ cd ..
  $ cd client

  ```
  * Run the following command in seperate folder
  ```
  $ npm run dev

  ````
***
## Folder Structure

````
├── client
│   ├── contract
│   ├── dist
│   ├── neardev
│   ├── out
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── src
│   └── yarn.lock
├── README.md
└── server
    ├── package.json
    ├── package-lock.json
    └── src
````
