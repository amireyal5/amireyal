const sendgrid = require('@sendgrid/mail');

// אל תציב את ה-API Key בקוד ישירות. השתמש ב-Environment Variable.
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);  // מפתח API מוגדר בסביבת Netlify

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);  // קבלת נתונים מהטופס

  const msg = {
    to: 'amir@amireyal.co.il',  // כתובת המייל שלך
    from: email,  // כתובת המייל של מי שממלא את הטופס
    subject: `New contact form submission from ${name}`,
    text: message,
  };

  try {
    await sendgrid.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Error sending email' }),
    };
  }
};
