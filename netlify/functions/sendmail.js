const sgMail = require("@sendgrid/mail");

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: "amir@amireyal.co.il", // כתובת היעד שלך
      from: process.env.FROM_EMAIL, // כתובת שאישרת ב-SendGrid
      subject: `📬 הודעה חדשה מטופס צור קשר`,
      text: `שם: ${name}\nאימייל: ${email}\n\nהודעה:\n${message}`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("שגיאה בשליחת מייל:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "שליחה נכשלה" }),
    };
  }
};
