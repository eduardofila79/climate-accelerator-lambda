
const emailGen = ( userName ) =>
{
    return (
        <html lang="en">
            <head>
                <title>Insuring the Net Zero Transition</title>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
            </head>
            <body>
                <table align="center" width="838" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td valign="top">
                            <table align="center" width="783" border="0" cellspacing="0" cellpadding="0" style="background-color: #FFF; padding: 20px" >
                                <tr>
                                    <td valign="top" style="font-family: Helvetica, Verdana, Geneva, Tahoma, sans-serif; font-size: 14px; line-height: 1.7; padding-bottom: 15px;">
                                        Dear { userName },
                                        <br /><br />
                                        Thank you for joining PwC at the Reinsurance Rendez-vous in Monte Carlo. We hope you enjoyed our session, <b>Turning ESG Theory into Action: Insuring the Net Zero Transition.</b>
                                        <br /><br />
                                        Now that you have explored what the transition may mean for your business, <b>how can you start to take advantage of the opportunity that the net zero transition presents?</b>
                                        <ul style="padding-left: 20px; margin-top: 20px;">
                                            <li>
                                                <a href="/" target="_blank" style="color: #000; text-decoration: underline;">Survey your customers</a> to learn firsthand what the net zero transition means for them
                                            </li>
                                            <li>
                                                <a href="/" target="_blank" style="color: #000; text-decoration: underline;">Click here</a> for a brief survey to share your thoughts about the experience. Interview your underwriters to understand the changing risk profiles they have encountered
                                            </li>
                                        </ul>
                                        <br />
                                        Your personalized risk and opportunity heatmap along with the notes you took during the session are attached to this email. The document also includes useful tips on how to enable and participate in the economy’s transition and PwC contacts to turn this experience into action.
                                        <br /><br />
                                        If you have questions or want to continue continue to the conversation, please reach out to PwC Insurance Partner <a href="mailto:andy.moore@pwc.com" target="_blank" style="color: #000; text-decoration: underline;">andy.moore@pwc.com</a> to get started.
                                        <br /><br />
                                        - PWC
                                        <br /><br />
                                        <a href="/" target="_blank" style="color: #000; text-decoration: underline;">Click here</a> for a brief survey to share your thoughts about the experience.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
        </html >
    )

}

exports.emailGen = emailGen;