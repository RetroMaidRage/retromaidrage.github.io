document.addEventListener("DOMContentLoaded", () => {

  const selector = document.getElementById("theme-selector");


    const savedTheme = localStorage.getItem("theme") || "theme-classic";
    document.body.className = savedTheme;


    if (selector) selector.value = savedTheme;


    if (selector) {
        selector.addEventListener("change", () => {
            document.body.className = selector.value;
            localStorage.setItem("theme", selector.value);
        });
}

//////////////////////////////////////////////////////////
function animationTypingFromText(doc, speed = 100, date) {
//  const cursor = document.getElementById("anim_cursor");
  const text = doc.innerHTML ;
  let i = 0;
  doc.textContent = "";

  function animateTyping() {
    if (i <= text.length) {
      doc.innerHTML  = text.slice(0, i)  + "|";
      i++;
      setTimeout(animateTyping, speed);
    }else{
          doc.innerHTML  = text;
      if (date == true){
        doc.innerHTML  = text;
        const dateElement = document.getElementById("datetime");
        const now = new Date();
        const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
        const dayOfWeek = days[now.getDay()];

        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();

        dateElement.textContent = `| ${dayOfWeek} | ${day}.${month}.${year}`;
}
    }
  }
  animateTyping();
}
animationTypingFromText(document.getElementById("up-panel"), 1, true);
animationTypingFromText(document.getElementById("pos-text"), 1);
const dateElement = document.getElementById("datetime");
const now = new Date();
const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const dayOfWeek = days[now.getDay()];

const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const year = now.getFullYear();

dateElement.textContent = `| ${dayOfWeek} | ${day}.${month}.${year}`;
//////////////////////////////////////////////////////////
function animationLinesOnly(doc, lineDelay = 400) {
  const lines = doc.textContent.split("\n");
  doc.textContent = "";

  let i = 0;

  function nextLine() {
    if (i < lines.length) {
      doc.textContent += lines[i] + "\n";
      i++;
      setTimeout(nextLine, lineDelay);
    }
  }

  nextLine();
}

//animationLinesOnly(document.getElementById("center-left-panel"), 1000);
//animationLinesOnly(document.getElementById("center-right-panel"));
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
function spinner(){
  const spinner = ['|', '/', '-', '\\'];
let i = 0;

setInterval(() => {
  document.getElementById('spinner').textContent = spinner[i % spinner.length];
  i++;
}, 150);
}
spinner();
///////////////////////////////////////////////////////////////////////////////
function glitch(count = 2) {
  const chars = '!"#$%&\'()*+,-./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
  const elements = document.querySelectorAll('.glitch');

  elements.forEach(el => {
    const min = 200;  // минимальная скорость
    const max = 400;  // максимальная скорость
    const speed = Math.random() * (max - min) + min;


    setInterval(() => {
      let out = '';

      for (let i = 0; i < count; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
      }

      el.textContent = out;
    }, speed);
  });
}

     setTimeout(glitch, 12000); // задержка между строками
//////////////////////////////////////////////////////////////////////////

});
