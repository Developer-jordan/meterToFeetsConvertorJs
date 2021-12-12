let meter_btn = document.querySelector("#meter_btn");
let feet_btn = document.querySelector("#feet_btn");

meter_btn.addEventListener("click", function () {
  let input = document.querySelector("#input").value;
  let output = (document.querySelector("#output").value =
    input / 3.28 + "meters");
});

feet_btn.addEventListener("click", function () {
  let input = document.querySelector("#input").value;
  let output = (document.querySelector("#output").value =
    input * 3.28 + "feets");
});
