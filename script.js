document.addEventListener('DOMContentLoaded', function() {
    // -----------------------------
    // אלמנטים DOM
    // -----------------------------
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu > li');
    const submenuParents = document.querySelectorAll('.has-submenu');
    const consultationButton = document.querySelector('.fixed-consultation-button');
    const form = document.getElementById('contactForm');
    const messageBox = document.getElementById('form-message');
    const aboutMeImage = document.getElementById('about-me-image');
    const aboutMeText = document.getElementById('about-me-text');
    const header = document.querySelector('#main-header');

    // -----------------------------
    // משתני מצב
    // -----------------------------
    let isMobile = window.innerWidth <= 768;
    let prevScrollPos = window.pageYOffset;

    // -----------------------------
    // פונקציות עזר
    // -----------------------------
    function closeAllSubmenus() {
        submenuParents.forEach(parent => {
            parent.classList.remove('active');
            const submenu = parent.querySelector('.submenu');
            if (submenu) submenu.classList.remove('open');
        });
    }

    function adjustSubmenuPositions() {
        if (!isMobile) {
            document.querySelectorAll('.submenu').forEach(submenu => {
                const rect = submenu.getBoundingClientRect();
                if (rect.right < 0) {
                    submenu.style.right = 'auto';
                    submenu.style.left = '0';
                } else {
                    submenu.style.right = '';
                    submenu.style.left = '';
                }
            });
        }
    }

    function closeMenu() {
        if (menu) menu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
        closeAllSubmenus();
    }

    function initAccessibility() {
        if (hamburger) {
            hamburger.setAttribute('aria-label', 'תפריט ניווט');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('role', 'button');
        }

        menuItems.forEach(item => {
            item.setAttribute('role', 'none');
            const link = item.querySelector('a');
            if (link) {
                link.setAttribute('role', 'menuitem');
            }
        });

        submenuParents.forEach(parent => {
            parent.setAttribute('aria-haspopup', 'true');
            parent.setAttribute('aria-expanded', 'false');
        });
    }

    // -----------------------------
    // טיפול בתפריט ההמבורגר
    // -----------------------------
    if (hamburger && menu) {
        // טיפול בלחיצה/מגע
        function toggleMenu(e) {
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
            closeAllSubmenus();
            
            const isExpanded = menu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        }

        // אירועים רגילים
        hamburger.addEventListener('click', toggleMenu);
        
        // אירועים למובייל
        hamburger.addEventListener('touchstart', toggleMenu, { passive: false });

        // סגירת תפריט בלחיצה בחוץ
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        });

        // סגירת תפריט במגע בחוץ
        document.addEventListener('touchstart', function(e) {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        }, { passive: true });
    }

    // -----------------------------
    // טיפול בתתי תפריטים
    // -----------------------------
    submenuParents.forEach(parent => {
        const link = parent.querySelector('a');
        const submenu = parent.querySelector('.submenu');

        if (link) {
            link.addEventListener('click', function(e) {
                if (isMobile) {
                    e.preventDefault();
                    parent.classList.toggle('active');
                    if (submenu) submenu.classList.toggle('open');

                    submenuParents.forEach(otherParent => {
                        if (otherParent !== parent) {
                            otherParent.classList.remove('active');
                            otherParent.querySelector('.submenu')?.classList.remove('open');
                        }
                    });

                    parent.setAttribute('aria-expanded', parent.classList.contains('active'));
                }
            });
        }

        if (!isMobile && submenu) {
            parent.addEventListener('mouseenter', function() {
                parent.classList.add('active');
                submenu.classList.add('open');
                adjustSubmenuPositions();
            });

            parent.addEventListener('mouseleave', function() {
                parent.classList.remove('active');
                submenu.classList.remove('open');
            });

            if (link) {
                link.addEventListener('focus', function() {
                    parent.classList.add('active');
                    submenu.classList.add('open');
                    adjustSubmenuPositions();
                });
            }

            parent.addEventListener('focusout', function(e) {
                if (!parent.contains(e.relatedTarget)) {
                    parent.classList.remove('active');
                    submenu.classList.remove('open');
                }
            });
        }
    });

    // -----------------------------
    // טיפול בשינוי גודל מסך
    // -----------------------------
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth <= 768;

        if (isMobile !== newIsMobile) {
            isMobile = newIsMobile;
            if (!isMobile) closeMenu();
        }

        adjustSubmenuPositions();
    });

    // -----------------------------
    // טופס יצירת קשר
    // -----------------------------
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
    if (header) {
        window.onscroll = function() {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                header.style.top = "0";
            } else {
                header.style.top = "-80px";
            }
            prevScrollPos = currentScrollPos;
        };
    }

    // -----------------------------
    // אתחול נגישות
    // -----------------------------
    initAccessibility();

    // -----------------------------
    // אנימציה לכפתור ייעוץ
    // -----------------------------
    if (consultationButton) {
        consultationButton.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                window.location.href = this.href;
            }, 200);
        });
    }
});