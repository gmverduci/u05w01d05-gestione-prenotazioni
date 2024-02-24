window.addEventListener('load', function() {
    const emmeHtml = document.getElementsByTagName('path');
    const emme = Array.from(emmeHtml);

    setInterval(function() {
        const randomIndex = Math.floor(Math.random() * emme.length);
        const randomElement = emme[randomIndex];

        if (randomElement.classList.contains('hidden')) {
            randomElement.classList.remove('hidden');
        } else {
            randomElement.classList.add('hidden');
        }
    }, 300);
});




window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    const getStartedBtn = document.getElementById('get-started');
    const startReadingBtn = document.getElementById('hero-left2');
  
    const limitHeight = startReadingBtn.offsetTop;
  
    if (window.scrollY >= limitHeight) {
      nav.classList.add('navbar-white');
      getStartedBtn.classList.add('btn-green');
    } else {
      nav.classList.remove('navbar-white');
      getStartedBtn.classList.remove('btn-green');
    }
  });