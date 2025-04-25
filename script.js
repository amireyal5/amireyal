document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const hamburgerIcon = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');
    let prevScrollPos = window.pageYOffset; // מיקום הגלילה הקודם

    // פונקציה להתאמת המיקום של התפריט
    function adjustMenuPosition() {
        if (window.innerWidth <= 768) {
            const headerHeight = header.offsetHeight;
            mobileMenu.style.top = headerHeight + 'px';
        } else {
            mobileMenu.style.top = '60px';
        }
    }

    // הוספת אירועים לאייקון המבורגר ולתפריט
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
