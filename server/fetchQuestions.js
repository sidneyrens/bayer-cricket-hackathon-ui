const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB({ region: 'us-east-1', apiVersion: '2020-10-28' });

exports.handler = (event, context, cb) => {
  const params = {
    TableName: 'trivia',
  };
  dynamoDB.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      const unmarshalledData = data.Items.map((el) => {
        return AWS.DynamoDB.Converter.unmarshall(el);
      });

      const response = {
        statusCode: 200,
        body: JSON.stringify(unmarshalledData),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
      };

      console.log(response);
      cb(null, response);
    }
  });
};
