let count = 0;
function increment() {
  count++;
  document.getElementById("count-el").innerText = count;
}
function save() {
  let x = document.getElementById("save--el");
  x.innerText = x.innerText + " - " + count;
  count = 0;
  document.getElementById("count-el").innerText = count;
}
