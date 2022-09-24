const learnmore = document.getElementById("learnmore");
learnmore.addEventListener("click", popup);

const build = document.getElementById("build");
const code = document.getElementById("code");

async function popup() {
  learnmore.classList.add("invis");
  popup2();
  await new Promise((r) => setTimeout(r, 200));
  learnmore.innerText = "About Us";
  learnmore.classList.remove("invis");
  learnmore.href = "about.html";
}

async function popup2() {
  build.classList.remove("invis");
  await new Promise((r) => setTimeout(r, 200));
  code.classList.remove("invis");
}
