let Warning = false;
let UponClick = false;
let KickOff;
let MouseOnClick = false;

const BeginElement = document.getElementById("start");

function start() {
  console.log("Hello from start function!");
  MouseOnClick = true;
  UponClick = true;
  KickOff = Date.now();

  Warning = false;

  BeginElement.style.position = "absolute";
  BeginElement.style.left = "0px";
  BeginElement.style.top = "0px";
}

document.getElementById("maze").addEventListener("mousemove", (event) => {
  if (MouseOnClick && UponClick) {
    const GameField = document.getElementById("maze");
    const rect = GameField.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    BeginElement.style.left = `${Math.max(0, Math.min(mouseX - BeginElement.offsetWidth / 2, rect.width - BeginElement.offsetWidth))}px`;
    BeginElement.style.top = `${Math.max(0, Math.min(mouseY - BeginElement.offsetHeight / 2, rect.height - BeginElement.offsetHeight))}px`;
  }
});

function end() {
  console.log("Hello from end function!");
  if (UponClick && MouseOnClick) {
    const endTime = Date.now();
    const timeElapsed = (endTime - KickOff) / 1000;
    alert(`Yeah!! You completed it in: ${timeElapsed}s`);
  }
}
