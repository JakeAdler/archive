let vendorData = require('./data/testVendors.json');
let Vendor = require('../models/vendor')

function saveVendors(){
    for (var vendor in vendorData){
        new Vendor(vendorData[vendor])
        .save((err, savedVendor)=>{
            if (err) {
                console.log('Error saving Vendor ----- :( ------ \n', err)
            } else {
                console.log(savedVendor);
            }
        })
    }
}

function importData() {
        Vendor.find({name: vendorData[0].name}, (err, results)=>{
            if (err) {
                console.log('There was an error searching for saved vendors')
            } else if (results.length > 0) {
                console.log("You already saved these articles, so we didn't save them again \n-------\nYou may remove or comment out importTest()");
            } else if (results.length === 0){
                saveVendors();
            }
        })

}

module.exports = importData;