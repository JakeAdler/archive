# The Scoop
---
## Contributing
Anybody is free to contribute, regardless of experience. After completeing the intial setup, choose one of the two options below in order to get the app running.

### Initial setup
Run the following commands:

	git clone https://github.com/JakeAdler/The-Scoop.git
	cd The-Scoop
	npm install

After cloning the repository and installing the dependencies, the app will **not** run, because it requires access to a database. Choose one of the two options below:

### 1. Get access to the development databse

Send me a message on discord asking for access to the development database. I will send a `.env` file that you will place at the root of the project. **My discord is: qorxi#9972**.

### 2. Build the databse yourself

If you would rather have the ability to play around with the database, you can build it yourself in a few steps:  

* Clone into [The-Scoop-Article-Machine](https://github.com/JakeAdler/The-Scoop-Article-Machine.git)

``` 
git clone https://github.com/JakeAdler/The-Scoop-Article-Machine.git
cd The-Scoop-Article-Machine
npm install
```

* Create a new project on [Firebase](https://firebase.google.com/)
* Create a **Cloud Firestore** database
* Create a new web app 
* Create a `.env` file in the root of the project
* Add the configuration data in the `.env` file in the following format: 

```
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_DATABASE_URL=your_firebase_database_url
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

* This is the same `.env` file that you will use in The-Scoop
* Run the app with `npm start` 

Now you should have a populated databse to work with, make sure you copy the `.env` file into The-Scoop so that it can read from the databse. 


