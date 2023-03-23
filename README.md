# osControl-api

To run this API you need to add to /src/config the files:

auth.json
{
    "secret": "<<--select a secret-->>"
}

database.js or use databaseCosmosDb.js file
module.exports={
    local:{
        localUrl: '<<--MONGO DB URL-->>'
    }
};
