//Создать Калькулятор. Реализовать его функциональность.
function insert(num) {
  $(".calc-display").val($(".calc-display").val() + num);
}
function eql() {
  $(".calc-display").val(eval($(".calc-display").val()));
}
function c() {
  $(".calc-display").val("");
}
function del() {
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
}
/*function add() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1); //если ввели строку а не число то срабатывать не будет

  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 + num2;

  document.getElementById("out").innerHTML = result;
}

function subtract() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1); //если ввели строку а не число то срабатывать не будет

  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 - num2;

  document.getElementById("out").innerHTML = result;
}
function multiply() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1); //если ввели строку а не число то срабатывать не будет

  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 * num2;

  document.getElementById("out").innerHTML = result;
}
function divide() {
  let num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1); //если ввели строку а не число то срабатывать не будет

  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);
  result = num1 / num2;

  document.getElementById("out").innerHTML = result;
}*/
