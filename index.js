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
    const { receiverName, receiverEmail, base64Data } = JSON.parse(
        event.body
    );

    const base64RemoveDataURI = base64Data.replace(
        "data:application/pdf;base64,",
        ""
    );

    var message = {
        fromEmail: "aaradhyasharma26@gmail.com",
        to: [receiverEmail],
        subject: "Monte Carlo Rendez-Vous 2022",
        bodyHtml: `<!DOCTYPE html><html lang='en'><head> <title>Insuring the Net Zero Transition</title> <meta http–equiv='Content-Type' content='text/html; charset=UTF-8'/> <meta http–equiv='X-UA-Compatible' content='IE=edge'/> <meta name='viewport' content='width=device-width, initial-scale=1.0 '/> </head><body> <table align='center' width='838' border='0' cellspacing='0' cellpadding='0'> <tr> <td valign='top'> <table align='center' width='783' border='0' cellspacing='0' cellpadding='0' style='background-color: #FFF; padding: 20px'> <tr> <td valign='top' style='font-family: Helvetica, Verdana, Geneva, Tahoma, sans-serif; font-size: 14px; line-height: 1.7; padding-bottom: 15px;'> Dear ${receiverName}, <br/><br/> Thank you for joining PwC at the Reinsurance Rendez-vous in Monte Carlo. We hope you enjoyed our session, <b>Turning ESG Theory into Action: Insuring the Net Zero Transition.</b> <br/><br/> Now that you have explored what the transition may mean for your business, <b>how can you start to take advantage of the opportunity that the net zero transition presents?</b> <br/><br/> One potential first step is to leverage your in-house expertise and <b>interview your underwriters to gain an understanding of the changing risk profiles</b> they have already encountered. Alternatively, <b>survey your customers</b> to learn firsthand what the net zero transition will mean for them. <br/><br/>A more exhaustive list of potential <b>next steps to enable and participate in the economy’s net zero transition is attached to this email</b> along with useful PwC contacts to help you turn this experience into action. The attachment also includes your personalized risk and opportunity heatmap and the notes you took during the session. <br/><br/>If you have questions or want to continue to the conversation, please reach out to PwC Insurance Partner <a href='mailto:andy.moore@pwc.com' target='_blank' style='color: #000; text-decoration: underline;'>andy.moore@pwc.com</a> to get started. <br/><br/> - PWC <br/><br/> <a href='/' target='_blank' style='color: #000; text-decoration: underline;'>Click here</a> for a brief survey to share your thoughts about the experience. </td></tr></table> </td></tr></table></body></html>`,
        attachments: [{
            name: "insuringthenetzerotransition.pdf",
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
