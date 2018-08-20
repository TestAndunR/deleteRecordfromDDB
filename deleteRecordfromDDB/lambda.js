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

    ddb.delete({
        TableName: 'test03',
        Key: { 'id1': '1', 'id2': 2 }
    }).promise().then(function (data) {
        //your logic goes here
    }).catch(function (err) {
        //handle error
    });




    callback(null, 'Successfully executed');
}