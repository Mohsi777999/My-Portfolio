
// Script For Navigation Bar Start Here 

const hamburger = document.querySelector(".hamburger");

const navItems = document.querySelector(".nav-items");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
})

// Script For Navigation Bar End Here




// Script For Skill Counter Start Here 

const htmlPercentageCounter = document.getElementById('html-percent-counter');
const cssPercentageCounter = document.getElementById('css-percent-counter');
const jsPercentageCounter = document.getElementById('js-percent-counter');
const bootPercentageCounter = document.getElementById('bootstrap-percent-counter');
const jqueryPercentageCounter = document.getElementById('jquery-percent-counter');

let htmlPercentage = 0;

const htmlInterval = setInterval(() => {
  htmlPercentage++;
  htmlPercentageCounter.textContent = `${htmlPercentage}%`;

  if (htmlPercentage === 90) {
    clearInterval(htmlInterval);
  }
}, 30);

let cssPercentage = 0;

const cssInterval = setInterval(() => {
  cssPercentage++;
  cssPercentageCounter.textContent = `${cssPercentage}%`;

  if (cssPercentage === 70) {
    clearInterval(cssInterval);
  }
}, 70);

let jsPercentage = 0;

const jsInterval = setInterval(() => {
  jsPercentage++;
  jsPercentageCounter.textContent = `${jsPercentage}%`;

  if (jsPercentage === 50) {
    clearInterval(jsInterval);
  }
}, 150);

let bootPercentage = 0;

const bootInterval = setInterval(() => {
  bootPercentage++;
  bootPercentageCounter.textContent = `${bootPercentage}%`;

  if (bootPercentage === 60) {
    clearInterval(bootInterval);
  }
}, 170);

let jqueryPercentage = 0;

const jqueryInterval = setInterval(() => {
  jqueryPercentage++;
  jqueryPercentageCounter.textContent = `${jqueryPercentage}%`;

  if (jqueryPercentage === 30) {
    clearInterval(jqueryInterval);
  }
}, 450);

// Script For Skill Counter End Here 








