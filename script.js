document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
    const hamburgerIcon = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');
    let prevScrollPos = window.pageYOffset;

    // פונקציה להתאמת המיקום של התפריט
    function adjustMenuPosition() {
        if (window.innerWidth <= 768) {
            const headerHeight = header.offsetHeight;
            mobileMenu.style.top = headerHeight + 'px';
        } else {
            mobileMenu.style.top = '60px';
        }
    }

    // פתיחה וסגירה של התפריט הראשי
    if (hamburgerIcon && mobileMenu && menuLinks && header) {
        hamburgerIcon.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            adjustMenuPosition();
        });

        menuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
            });
        });

        window.addEventListener('load', adjustMenuPosition);
        window.addEventListener('resize', adjustMenuPosition);
    }

    // פתיחת תפריט משנה בלחיצה במובייל
    function handleSubmenuToggleOnMobile() {
        const isMobile = window.innerWidth <= 768;
        const menuItemsWithSubmenu = document.querySelectorAll('.has-submenu > a');

        menuItemsWithSubmenu.forEach(function (menuItem) {
            menuItem.removeEventListener('click', menuItem._submenuHandler); // מנקה מאזין קודם אם קיים

            if (isMobile) {
                const handler = function (e) {
                    e.preventDefault();
                    const submenu = this.nextElementSibling;

                    // סוגר תפריטים אחרים
                    document.querySelectorAll('.has-submenu .submenu').forEach(function (el) {
                        if (el !== submenu) {
                            el.classList.remove('open');
                        }
                    });

                    // פותח/סוגר את התפריט הנוכחי
                    submenu.classList.toggle('open');
                };

                menuItem._submenuHandler = handler;
                menuItem.addEventListener('click', handler);
            }
        });
    }

    window.addEventListener('load', handleSubmenuToggleOnMobile);
    window.addEventListener('resize', handleSubmenuToggleOnMobile);

    // קוד טופס צור קשר
    const form = document.getElementById('contactForm');
    const messageBox = document.getElementById('form-message');

    if (form && messageBox) {
        form.addEventListener('submit', async function (e) {
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

    // התאמת גובה תמונה
    window.onload = function () {
        const aboutMeImage = document.getElementById('about-me-image');
        const aboutMeText = document.getElementById('about-me-text');

        if (aboutMeImage && aboutMeText) {
            const imageHeight = aboutMeImage.offsetHeight;
            aboutMeText.style.height = imageHeight + 'px';
        }
    };

    // אנימציית הופעת הדר בגלילה
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            header.style.top = "0";
        } else {
            header.style.top = "-80px";
        }
        prevScrollPos = currentScrollPos;
    }
});
