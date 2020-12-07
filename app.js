(function () {
  const link = document.querySelectorAll("nav > .hover-this");
  const cursor = document.querySelector(".cursor");
  const animate = function (e) {
    const span = this.querySelector("span");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;
    span.style.transform = `translate(${xMove}px,${yMove}px)`;
    if (e.type === "mouseleave") span.style.transform = ``;
  };
  const editCursor = function (e) {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  };
  link.forEach((b) => b.addEventListener("mousemove", animate));
  link.forEach((b) => b.addEventListener("mouseleave", animate));
  window.addEventListener("mousemove", editCursor);
})();
