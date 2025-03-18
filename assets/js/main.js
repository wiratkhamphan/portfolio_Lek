/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Gamer", "Driver"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)


 // ฟังก์ชันดาวน์โหลด
 function download() {
  const link = document.createElement('a');
  link.href = 'assets/file/wirat_khamphan.pdf'; // พาธของไฟล์
  link.download = 'wirat'; // ชื่อไฟล์ที่ดาวน์โหลด
  link.click(); // คลิกดาวน์โหลด
}

// เพิ่ม event listener ให้กับปุ่ม
document.getElementById('downloadBtn').addEventListener('click', download);


document.addEventListener("DOMContentLoaded", function () {
  const texts = {
      en: {
          home: "Home",
          about: "About",
          projects: "Projects",
          contact: "Contact",
          hire: "Hire Me",
          downloadCV: "Download CV",
          aboutMe: "About Me",
          myIntro: "My introduction",
          description: "Back-End Developer with expertise in designing and optimizing APIs, database management, and system architecture.",
          getInTouch: "Get in touch",
          contactMe: "Do you have a project in mind, contact me here",
      },
      th: {
          home: "หน้าหลัก",
          about: "เกี่ยวกับ",
          projects: "โปรเจค",
          contact: "ติดต่อ",
          hire: "จ้างฉัน",
          downloadCV: "ดาวน์โหลด CV",
          aboutMe: "เกี่ยวกับฉัน",
          myIntro: "แนะนำตัว",
          description: "นักพัฒนา Back-End ที่มีความเชี่ยวชาญในการออกแบบและปรับแต่ง API, การจัดการฐานข้อมูล และสถาปัตยกรรมระบบ",
          getInTouch: "ติดต่อฉัน",
          contactMe: "หากคุณมีโปรเจคในใจ ติดต่อฉันได้ที่นี่",
      }
  };

  const langThBtn = document.getElementById("lang-th");
  const langEnBtn = document.getElementById("lang-en");

  function changeLanguage(lang) {
      document.querySelector(".nav-link[href='#home']").textContent = texts[lang].home;
      document.querySelector(".nav-link[href='#about']").textContent = texts[lang].about;
      document.querySelector(".nav-link[href='#projects']").textContent = texts[lang].projects;
      document.querySelector(".nav-link[href='#contact']").textContent = texts[lang].contact;
      document.querySelector(".featured-text-btn .btn.blue-btn").textContent = texts[lang].hire;
      document.querySelector(".featured-text-btn a.btn").innerHTML = texts[lang].downloadCV + ' <i class="uil uil-file-alt"></i>';
      document.querySelector(".top-header h1").textContent = texts[lang].aboutMe;
      document.querySelector(".about-info h3").textContent = texts[lang].myIntro;
      document.querySelector(".featured-text-info p").textContent = texts[lang].description;
      document.querySelector("#contact .top-header h1").textContent = texts[lang].getInTouch;
      document.querySelector("#contact .top-header span").textContent = texts[lang].contactMe;

      localStorage.setItem("language", lang);
      langThBtn.classList.toggle("active", lang === "th");
      langEnBtn.classList.toggle("active", lang === "en");
  }

  langThBtn.addEventListener("click", () => changeLanguage("th"));
  langEnBtn.addEventListener("click", () => changeLanguage("en"));

  // โหลดภาษาล่าสุดที่เลือกไว้
  const savedLang = localStorage.getItem("language") || "en";
  changeLanguage(savedLang);
});
