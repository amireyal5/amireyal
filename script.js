document.addEventListener('DOMContentLoaded', function() {
    // -----------------------------
    // רכיבי תפריט והמבורגר
    // -----------------------------
    const header = document.getElementById('main-header');
    const hamburgerIcon = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    let prevScrollPos = window.pageYOffset;

    // טיפול בהמבורגר ובתפריט ניווט
    if (hamburgerIcon && mobileMenu) {
        hamburgerIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            adjustMenuPosition();
            
            // סגירת תפריטי משנה כשפותחים תפריט ראשי
            if (mobileMenu.classList.contains('active')) {
                closeAllSubmenus();
            }
        });
    }

    // טיפול בתפריטי משנה
    hasSubmenuItems.forEach(item => {
        const link = item.querySelector('> a');
        
        if (link) {
            link.addEventListener('click', function(e) {
                // בדסקטופ - מתנהג כרגיל (פתיחת תת-תפריט בריחוף)
                if (window.innerWidth > 768) return;
                
                // במובייל - טיפול בתפריט משנה
                e.preventDefault();
                e.stopPropagation();
                
                closeAllSubmenusExcept(item);
                
                item.classList.toggle('active');
                const submenu = item.querySelector('.submenu');
                if (submenu) submenu.classList.toggle('open');
            });
        }
    });

    // סגירת תפריטים בלחיצה בחוץ
    document.addEventListener('click', function() {
        if (mobileMenu) mobileMenu.classList.remove('active');
        closeAllSubmenus();
    });

    // סגירת תפריט בלחיצה על פריט (לא כולל תפריטי משנה)
    menuLinks.forEach(link => {
        if (!link.parentElement.classList.contains('has-submenu')) {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
            });
        }
    });

    // -----------------------------
    // פונקציות עזר לניווט
    // -----------------------------
    function adjustMenuPosition() {
        if (window.innerWidth <= 768 && mobileMenu && header) {
            const headerHeight = header.offsetHeight;
            mobileMenu.style.top = headerHeight + 'px';
        }
    }

    function closeAllSubmenus() {
        hasSubmenuItems.forEach(item => {
            item.classList.remove('active');
            const submenu = item.querySelector('.submenu');
            if (submenu) submenu.classList.remove('open');
        });
    }

    function closeAllSubmenusExcept(exceptItem) {
        hasSubmenuItems.forEach(item => {
            if (item !== exceptItem) {
                item.classList.remove('active');
                const submenu = item.querySelector('.submenu');
                if (submenu) submenu.classList.remove('open');
            }
        });
    }

    // -----------------------------
    // טופס יצירת קשר
    // -----------------------------
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

    // -----------------------------
    // התאמת גובה תמונה
    // -----------------------------
    const aboutMeImage = document.getElementById('about-me-image');
    const aboutMeText = document.getElementById('about-me-text');

    if (aboutMeImage && aboutMeText) {
        const adjustTextHeight = () => {
            const imageHeight = aboutMeImage.offsetHeight;
            aboutMeText.style.height = imageHeight + 'px';
        };

        window.addEventListener('load', adjustTextHeight);
        window.addEventListener('resize', adjustTextHeight);
    }

    // -----------------------------
    // אנימציית הדר
    // -----------------------------
    window.onscroll = function() {
        if (!header) return;
        
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-80px";
        }
        prevScrollPos = currentScrollPos;
    };

    // -----------------------------
    // אירועי רספונסיביות
    // -----------------------------
    window.addEventListener('resize', function() {
        adjustMenuPosition();
        
        // סגירת תפריטים בעת מעבר לדסקטופ
        if (window.innerWidth > 768 && mobileMenu) {
            mobileMenu.classList.remove('active');
            closeAllSubmenus();
        }
    });

    window.addEventListener('load', function() {
        adjustMenuPosition();
    });
});