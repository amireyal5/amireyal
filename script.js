document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const hamburgerIcon = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');
    let prevScrollPos = window.pageYOffset; // מיקום הגלילה הקודם

    function adjustMenuPosition() {
        if (window.innerWidth <= 768) {
            const headerHeight = header.offsetHeight;
            mobileMenu.style.top = headerHeight + 'px';
        } else {
            mobileMenu.style.top = '60px';
        }
    }

    if (hamburgerIcon && mobileMenu && menuLinks && header) {
        hamburgerIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            adjustMenuPosition();
        });

        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });

        window.addEventListener('load', adjustMenuPosition);
        window.addEventListener('resize', adjustMenuPosition);
    }

    // קוד טופס צור קשר
    const form = document.getElementById('contactForm');
    const messageBox = document.getElementById('form-message');

    if (form && messageBox) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    messageBox.textContent = "ההודעה נשלחה בהצלחה!";
                    messageBox.style.color = "green";
                    form.reset();
                } else {
                    messageBox.textContent = "אירעה שגיאה בשליחה. נסו שוב.";
                    messageBox.style.color = "red";
                }
            } catch (error) {
                messageBox.textContent = "השליחה נכשלה. ייתכן שיש בעיית רשת.";
                messageBox.style.color = "red";
            }
        });
    }

    // קוד התאמת גובה תמונה
    window.onload = function() {
        const aboutMeImage = document.getElementById('about-me-image');
        const aboutMeText = document.getElementById('about-me-text');

        if (aboutMeImage && aboutMeText) {
            const imageHeight = aboutMeImage.offsetHeight;
            aboutMeText.style.height = imageHeight + 'px';
        }
    };

    // קוד אנימציית הדר
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0"; // הדר מופיע
        } else {
            header.style.top = "-80px"; // הדר נעלם (הנחתי שהגובה הוא 80px)
        }
        prevScrollPos = currentScrollPos;
    }
});
// ייבוא הספריה של SendGrid (אם לא התקנת אותה, יש להתקין באמצעות npm)
const sgMail = require('@sendgrid/mail');

// הגדרת המפתח API שלך (שים את המפתח שלך כאן)
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

// פונקציה לשליחת המייל דרך SendGrid
function sendEmail(name, email, message) {
  const msg = {
    to: 'amir@amireyal.co.il', // כתובת המייל שאליו יישלח
    from: 'info@amireyal.co.il', // כתובת המייל של השולח
    subject: 'הודעה חדשה מהאתר שלך',
    text: `שם: ${name}\nאימייל: ${email}\nהודעה: ${message}`,
  };

  //  שליחת המייל ישירות
  sgMail.send(msg)
    .then(() => {
      console.log('ההודעה נשלחה בהצלחה!');
    })
    .catch((error) => {
      console.error('שגיאה בשליחת המייל:', error);
    });
}

// שמירה על טופס לשליחה
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // מונע שליחה מחדש של הטופס

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  // קריאה לפונקציה לשליחת המייל
  sendEmail(name, email, message);
});
