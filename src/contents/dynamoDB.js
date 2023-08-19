const dynamoDB = new AWS.DynamoDB();

const params = {
  TableName: 'portfolio-db',
  Key: {
    'PrimaryKeyName': { S: 'UserID' }
  }
};

dynamoDB.getItem(params, (err, data) => {
  if (err) {
    console.error('Error', err);
  } else {
    console.log('Success', data.Item);
  }
});
