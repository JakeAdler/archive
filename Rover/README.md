# Rover
### Rover is a geospatial query microservice 🌎 Built for [Rove](https://github.com/JakeAdler/Rove)
#### To use:
    git clone https://github.com/JakeAdler/Rover.git
    
##### If using DB other than RoveHome :
 - In `config/dbConnect.js` change `uri` to your MongoDB connection uri, and `DataBaseName` to the name of your database. 
 - If using Atlas, make sure you whitelist your IP address, or allow all IP adresses (0.0.0.0).

##### If you need to test: 
- In `app.js` uncomment `importTest()`
- Run `npm start`, and check the console to make sure the test vendors saved properly
- Make a `post` request to `localhost:3000/getVendors`
- In the body of the post request, include the json data :  
    - `{
	"location": {
        "type": "Point",
        "coordinates": [<longitude>, <latitude>]
    }
}`
- You may also include an optional radius in the body of the request 
    - Example: `{
	"location": {
        "type": "Point",
        "coordinates": [<longitude>, <latitude>]
    },
    "radius" : 10

}`
