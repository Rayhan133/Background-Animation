let banner = document.getElementsByClassName("banner");
let block = document.getElementsByClassName("blocks");

for (let i = 0; i < 400; i++) {
  banner[0].innerHTML += `<div class="blocks"></div>`;
  block[i].style.animationDelay = `${i * 0.05}s`;
}
