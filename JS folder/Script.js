
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
const mysqlPercentageCounter = document.getElementById('mysql-percent-counter');
const phpPercentageCounter = document.getElementById('php-percent-counter');
const laravelPercentageCounter = document.getElementById('laravel-percent-counter');

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

let mysqlPercentage = 0;

const mysqlInterval = setInterval(() => {
  mysqlPercentage++;
  mysqlPercentageCounter.textContent = `${mysqlPercentage}%`;

  if (mysqlPercentage === 50) {
    clearInterval(mysqlInterval);
  }
}, 180);

let phpPercentage = 0;

const phpInterval = setInterval(() => {
  phpPercentage++;
  phpPercentageCounter.textContent = `${phpPercentage}%`;

  if (phpPercentage === 70) {
    clearInterval(phpInterval);
  }
}, 180);

let laravelPercentage = 0;

const laravelInterval = setInterval(() => {
  laravelPercentage++;
  laravelPercentageCounter.textContent = `${laravelPercentage}%`;

  if (laravelPercentage === 50) {
    clearInterval(laravelInterval);
  }
}, 180);

// Script For Skill Counter End Here 








