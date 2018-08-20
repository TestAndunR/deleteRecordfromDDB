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
        TableName: 'test03',
        Item: { 'id1': 1, 'id2': '2', 'test': '03' }
    }).promise().then(function (data) {
        //your logic goes here
        console.log(data)
    }).catch(function (err) {
        //handle error
        console.log(err)
    });


    callback(null, 'Successfully executed');
}