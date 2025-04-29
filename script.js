document.addEventListener('DOMContentLoaded', function() {
    // אלמנטים DOM
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu > li');
    const submenuParents = document.querySelectorAll('.has-submenu');
    const consultationButton = document.querySelector('.fixed-consultation-button');
    
    // מצב אתחול
    let isMobile = window.innerWidth <= 768;
    
    // פונקציות עזר
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
    
    // טיפול בהמבורגר ובתפריט ראשי
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        closeAllSubmenus();
        
        // הוספת/הסרת aria-expanded
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });
    
    // סגירת תפריט בלחיצה בחוץ
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            closeAllSubmenus();
        }
    });
    
    // טיפול בתתי תפריטים במובייל
    submenuParents.forEach(parent => {
        const link = parent.querySelector('a');
        const submenu = parent.querySelector('.submenu');
        
        // הוספת תכונות נגישות
        parent.setAttribute('aria-haspopup', 'true');
        
        // טיפול בלחיצה במובייל
        link.addEventListener('click', function(e) {
            if (isMobile) {
                e.preventDefault();
                parent.classList.toggle('active');
                submenu.classList.toggle('open');
                
                // סגירת תתי תפריטים אחרים
                submenuParents.forEach(otherParent => {
                    if (otherParent !== parent) {
                        otherParent.classList.remove('active');
                        otherParent.querySelector('.submenu')?.classList.remove('open');
                    }
                });
                
                // עדכון aria-expanded
                const isExpanded = parent.classList.contains('active');
                parent.setAttribute('aria-expanded', isExpanded);
            }
        });
        
        // טיפול בריחוף במסך גדול
        if (!isMobile) {
            parent.addEventListener('mouseenter', function() {
                parent.classList.add('active');
                submenu.classList.add('open');
                adjustSubmenuPositions();
            });
            
            parent.addEventListener('mouseleave', function() {
                parent.classList.remove('active');
                submenu.classList.remove('open');
            });
            
            // נגישות מקלדת
            link.addEventListener('focus', function() {
                parent.classList.add('active');
                submenu.classList.add('open');
                adjustSubmenuPositions();
            });
            
            parent.addEventListener('focusout', function(e) {
                if (!parent.contains(e.relatedTarget)) {
                    parent.classList.remove('active');
                    submenu.classList.remove('open');
                }
            });
        }
    });
    
    // טיפול בשינוי גודל מסך
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth <= 768;
        
        if (isMobile !== newIsMobile) {
            isMobile = newIsMobile;
            
            // איפוס מצבים בעת מעבר בין מובייל לדסקטופ
            if (!isMobile) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                closeAllSubmenus();
            }
        }
        
        adjustSubmenuPositions();
    });
    
    // אתחול נגישות
    function initAccessibility() {
        hamburger.setAttribute('aria-label', 'תפריט ניווט');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('role', 'button');
        
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
    
    initAccessibility();
    
    // אנימציה לחיצה לכפתור ייעוץ
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
};        if (!isMobile) {
        link.addEventListener('focus', function() {
            parent.classList.add('active');
            submenu.classList.add('open');
            adjustSubmenuPositions();
        });

        parent.addEventListener('focusout', function(e) {
            // בדיקה שהפוקוס לא עבר לאלמנט בתוך תפריט המשנה
            if (!parent.contains(e.relatedTarget)) {
                parent.classList.remove('active');
                submenu.classList.remove('open');
            }
        });

        link.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown' && submenu) {
                e.preventDefault();
                submenu.querySelector('a')?.focus(); // התמקדות בקישור הראשון בתפריט המשנה
                parent.classList.add('active');
                submenu.classList.add('open');
                adjustSubmenuPositions();
            }
        });

        if (submenu) {
            const submenuLinks = submenu.querySelectorAll('a');
            submenuLinks.forEach((subLink, index) => {
                subLink.addEventListener('keydown', function(e) {
                    if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        if (index > 0) {
                            submenuLinks[index - 1].focus();
                        } else {
                            link.focus(); // חזרה לקישור הראשי
                        }
                    } else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        if (index < submenuLinks.length - 1) {
                            submenuLinks[index + 1].focus();
                        } else if (e.key === 'Escape') {
                            parent.classList.remove('active');
                            submenu.classList.remove('open');
                            link.focus(); // החזרת הפוקוס לקישור הראשי לאחר סגירה
                        }
                    });
                });
            }
        }
