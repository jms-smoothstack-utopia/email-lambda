var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

const UTOPIAEMAIL = "jordan.divina@smoothstack.com";
exports.handler = async function (event) {
  
  let email = event["email"];
  let subject = event["subject"];
  let content = event["content"];
  
  let params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: { Charset: "UTF-8", Data: content },
        Text: { Charset: "UTF-8", Data: content },
      },

      Subject: { Data: subject },
    },
    Source: "Utopia Airlines<" + UTOPIAEMAIL + ">",
  };
 
  return ses.sendEmail(params).promise();
};
