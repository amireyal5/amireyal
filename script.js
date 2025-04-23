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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("ההודעה נשלחה בהצלחה!");
        form.reset();
      } else {
        const result = await response.json();
        alert("שליחה נכשלה: " + (result.error || "נסה שוב מאוחר יותר"));
      }
    } catch (error) {
      console.error("שגיאה:", error);
      alert("התרחשה שגיאה. נסה שוב מאוחר יותר.");
    }
  });
});
