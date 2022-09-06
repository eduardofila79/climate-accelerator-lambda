const aws = require( "aws-sdk" );
const MailComposer = require( "nodemailer/lib/mail-composer" );
const { emailTemp } = require( './emailTemplate.js' )

const generateRawMailData = ( message ) =>
{
    let mailOptions = {
        from: message.fromEmail,
        to: message.to,
        subject: message.subject,
        text: message.bodyTxt,
        html: message.bodyHtml,
        attachments: message.attachments.map( a => ( { filename: a.name, content: a.data, encoding: 'base64' } ) )
    };
    return new MailComposer( mailOptions ).compile().build();
};

exports.handler = async ( event ) =>
{
    const { receiverName, receiverEmail, base64Data } = JSON.parse(
        event.body
    );

    const base64RemoveDataURI = base64Data.replace(
        "data:application/pdf;base64,",
        ""
    );

    const email_val = emailTemp( receiverName );

    var message = {
        fromEmail: "aaradhyasharma26@gmail.com",
        to: [ receiverEmail ],
        subject: "PwC’s turning ESG theory into action session results",
        bodyHtml: email_val,
        attachments: [ {
            name: "insuringthenetzerotransition.pdf",
            data: base64RemoveDataURI,
            encoding: "base64",
        } ]
    };

    let ses = new aws.SESV2();
    let params = {
        Content: { Raw: { Data: await generateRawMailData( message ) } },
        Destination: {
            ToAddresses: message.to,
            BccAddresses: message.bcc,
        },
        FromEmailAddress: message.fromEmail,
        ReplyToAddresses: message.replyTo,
    };

    return ses.sendEmail( params ).promise();
};
