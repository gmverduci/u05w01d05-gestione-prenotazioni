window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    const getStartedBtn = document.getElementById('get-started');
    const startReadingBtn = document.getElementById('hero-left2');
  
    const navH = nav.offsetHeight;
    const limitHeight = startReadingBtn.offsetTop;
  
    if (window.scrollY > limitHeight) {
      nav.classList.add('navbar-white');
      getStartedBtn.classList.add('btn-green');
    } else {
      nav.classList.remove('navbar-white');
      getStartedBtn.classList.remove('btn-green');
    }
  });