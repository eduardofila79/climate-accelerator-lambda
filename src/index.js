const aws = require( "aws-sdk" );
const MailComposer = require("nodemailer/lib/mail-composer");

const generateRawMailData = (message) => {
    let mailOptions = {
        from: message.fromEmail,
        to: message.to,
        subject: message.subject,
        text: message.bodyTxt,
        html: message.bodyHtml,
        attachments: message.attachments.map(a => ({ filename: a.name, content: a.data, encoding: 'base64' }))
    };
    return new MailComposer(mailOptions).compile().build();
};

exports.handler = async ( event ) =>
{
    const { receiverEmail, base64Data } = JSON.parse(
        event.body
    );

    const base64RemoveDataURI = base64Data.replace(
        "data:application/pdf;base64,",
        ""
    );

    var message = {
        fromEmail: "aaradhyasharma26@gmail.com",
        to: [receiverEmail],
        subject: "TEST SUBJECT PWC-CLA",
        bodyTxt: "Hi This is a test mail",
        bodyHtml: "<h3>Hi This is a test mail for PWC-CLA</h3>",
        attachments: [{
            name: "TEST_FILE_NAME.pdf",
            data: base64RemoveDataURI,
            encoding: "base64",
        }]
    };

    let ses = new aws.SESV2();
    let params = {
        Content: { Raw: { Data: await generateRawMailData(message) } },
        Destination: {
          ToAddresses: message.to,
          BccAddresses: message.bcc,
        },
        FromEmailAddress: message.fromEmail,
        ReplyToAddresses: message.replyTo,
      }; 

    return ses.sendEmail(params).promise();
};