const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
const horizon = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  tag.innerHTML = `${x}px, ${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;

  vertical.style.left = `${x}px`;
  horizon.style.top = `${y}px`;
});
