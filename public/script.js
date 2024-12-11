const navLinks = document.querySelector('.nav-links');
    const footer = document.querySelector('footer');
    const footerOffset = footer.offsetTop;

    window.addEventListener('scroll', function() {

      if (window.scrollY + window.innerHeight >= footerOffset) {

        navLinks.style.position = 'absolute';
        navLinks.style.bottom = '0';
        navLinks.style.transform = 'translateX(-50%)'; 
      } else {

        navLinks.style.position = 'fixed';
        navLinks.style.bottom = '87%';
        navLinks.style.transform = 'translateX(-50%)'; 
      }
    });

    window.addEventListener('resize', function() {

      if (navLinks.style.position === 'absolute') {
        navLinks.style.transform = 'translateX(-50%)';
      }
    });