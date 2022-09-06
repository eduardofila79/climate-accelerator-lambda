function emailTemp ( user_name )
{
    return "<!DOCTYPE html><html lang='en'><head> <title>Insuring the Net Zero Transition</title> <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'/> <meta http-equiv='X-UA-Compatible' content='IE=edge'/> <meta name='viewport' content='width=device-width, initial-scale=1.0 '/> </head><body> <table align='center' width='838' border='0' cellspacing='0' cellpadding='0'> <tr> <td valign='top'> <table align='center' width='783' border='0' cellspacing='0' cellpadding='0' style='background-color: #FFF; padding: 20px'> <tr> <td valign='top' style='font-family: Helvetica, Verdana, Geneva, Tahoma, sans-serif; font-size: 14px; line-height: 1.7; padding-bottom: 15px;'> Dear " + user_name + ", <br/><br/> Thank you for joining PwC at the Reinsurance Rendez-vous in Monte Carlo. We hope you enjoyed our session, <b>Turning ESG Theory into Action: Insuring the Net Zero Transition.</b> <br/><br/> Now that you have explored what the transition may mean for your business, <b>how can you start to take advantage of the opportunity that the net zero transition presents?</b> <br/><br/> One potential first step is to leverage your in-house expertise and <b>interview your underwriters to gain an understanding of the changing risk profiles</b> they have already encountered. Alternatively, <b>survey your customers</b> to learn firsthand what the net zero transition will mean for them. <br/><br/>A more exhaustive list of potential <b>next steps to enable and participate in the economy's net zero transition is attached to this email</b> along with useful PwC contacts to help you turn this experience into action. The attachment also includes your personalized risk and opportunity heatmap and the notes you took during the session. <br/><br/>If you have questions or want to continue to the conversation, please reach out to PwC Insurance Partner <a href='mailto:andy.moore@pwc.com' target='_blank' style='color: #000; text-decoration: underline;'>andy.moore@pwc.com</a> to get started. <br/><br/> - PwC <br/><br/> <a href='https://forms.gle/UW42oSJUmFR17e668' target='_blank' style='color: #000; text-decoration: underline;'>Click here</a> for a brief survey to share your thoughts about the experience. </td></tr></table> </td></tr></table></body></html>"
}

module.exports = { emailTemp };