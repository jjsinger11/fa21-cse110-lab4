let interval;

function everySec() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

if (!interval) {
  interval = setInterval(everySec, 1000);
}