let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    ddb.delete({
        TableName: 'BTMenu',
        Key: { 'itemCode': 'VEGPZ' }
    }).promise().then(function (data) {

        console.log(data)
        //your logic goes here
    }).catch(function (err) {
        //handle error
        console.log(err)
    });
    ddb.put({
        TableName: 'DbOperations',
        Item: { 'name': 'Andun', 'city': 'Galle', 'job': 'QA' }
    }).promise().then(function (data) {
        //your logic goes here
    }).catch(function (err) {
        //handle error
    });


    callback(null, 'Successfully executed');
}