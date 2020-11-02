//clear button
function clear() {
  document.querySelector("#inpt1").value = "";
}
//backspace button
function backspace() {
  var inpt2 = document.querySelector("#inpt2").value;
  var newText = inpt2.slice(0, -1);
  document.querySelector("#inpt2").value = newText;
}
//Add number function
function addNumber(num) {
  document.querySelector("#inpt2").value =
    document.querySelector("#inpt2").value + num;
}
// function to add decimal
function addDecimal(){
  document.querySelector("#inpt2").value=document.querySelector("#inpt2").value+".";
}
//Add function
function add() {
  var inpt1 = document.querySelector("#inpt1");
  var inpt2 = document.querySelector("#inpt2");
  if (inpt1.value == "" && inpt2.value == "") {
    alert("Enter some number.");
  }
  else if (inpt1.value != "" && inpt2.value == "") {
    inpt1.value = inpt1.value + "+";
  }
  else if (inpt1.value == "" && inpt2.value != "") {
    inpt1.value = inpt2.value + "+";
    inpt2.value = "";
  } else {
    var num1 = inpt1.value;
    var n = num1.length;
    var symbol = num1.slice(n - 1, n);
    if (symbol == "-") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue - num2;
      inpt1.value = inpt1.value + "+";
      inpt2.value = "";
    }
    else if (symbol == "+") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue + num2;
      inpt1.value = inpt1.value + "+";
      inpt2.value = "";
    }
    else if (symbol == "x") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue * num2;
      inpt1.value = inpt1.value + "+";
      inpt2.value = "";
    } else if (symbol == "/") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue / num2;
      inpt1.value = inpt1.value + "+";
      inpt2.value = "";
    } else {
      alert("Enter symbol to calculate or enter valid operation.")
    }
  }
}
//Subtract function
function sub() {
  var inpt1 = document.querySelector("#inpt1");
  var inpt2 = document.querySelector("#inpt2");
  if (inpt1.value == "" && inpt2.value == "") {
    alert("Enter some number.");
  }
  else if (inpt1.value != "" && inpt2.value == "") {
    inpt1.value = inpt1.value + "-";
  }
  else if (inpt1.value == "" && inpt2.value != "") {
    inpt1.value = inpt2.value + "-";
    inpt2.value = "";
  } else {
    var num1 = inpt1.value;
    var n = num1.length;
    var symbol = num1.slice(n - 1, n);
    if (symbol == "-") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue - num2;
      inpt1.value = inpt1.value + "-";
      inpt2.value = "";
    }
    else if (symbol == "+") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue + num2;
      inpt1.value = inpt1.value + "-";
      inpt2.value = "";
    }
    else if (symbol == "x") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue * num2;
      inpt1.value = inpt1.value + "-";
      inpt2.value = "";
    } else if (symbol == "/") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue / num2;
      inpt1.value = inpt1.value + "-";
      inpt2.value = "";
    } else {
      alert("Enter symbol to calculate or enter valid operation.")
    }
  }
}
//  Divide function
function divide() {
  
  var inpt1 = document.querySelector("#inpt1");
  var inpt2 = document.querySelector("#inpt2");
  if (inpt1.value == "" && inpt2.value == "") {
    alert("Enter some number.");
  }
  else if (inpt1.value != "" && inpt2.value == "") {
    inpt1.value = inpt1.value + "/";
  } else if (inpt1.value == "" && inpt2.value != "") {
    inpt1.value = inpt2.value + "/";
    inpt2.value = "";
  } else {
    var num1 = inpt1.value;
    var n = num1.length;
    var symbol = num1.slice(n - 1, n);
    if (symbol == "-") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue - num2;
      inpt1.value = inpt1.value + "/";
      inpt2.value = "";
    }
    else if (symbol == "+") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue + num2;
      inpt1.value = inpt1.value + "/";
      inpt2.value = "";
    }
    else if (symbol == "x") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue * num2;
      inpt1.value = inpt1.value + "/";
      inpt2.value = "";
    } else if (symbol == "/") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue / num2;
      inpt1.value = inpt1.value + "/";
      inpt2.value = "";
    } else {
      alert("Enter symbol to calculate or enter valid operation.")
    }
  }
}
//Multiply function
function multi() {
  var inpt1 = document.querySelector("#inpt1");
  var inpt2 = document.querySelector("#inpt2");
  if (inpt1.value == "" && inpt2.value == "") {
    alert("Enter some number.");
  }
  else if (inpt1.value != "" && inpt2.value == "") {
    inpt1.value = inpt1.value + "x";
  } else if (inpt1.value == "" && inpt2.value != "") {
    inpt1.value = inpt2.value + "x";
    inpt2.value = "";
  } else {
    var num1 = inpt1.value;
    var n = num1.length;
    var symbol = num1.slice(n - 1, n);
    if (symbol == "-") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue - num2;
      inpt1.value = inpt1.value + "x";
      inpt2.value = "";
    }
    else if (symbol == "+") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue + num2;
      inpt1.value = inpt1.value + "x";
      inpt2.value = "";
    }
    else if (symbol == "x") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue * num2;
      inpt1.value = inpt1.value + "x";
      inpt2.value = "";
    } else if (symbol == "/") {
      var newValue = num1.slice(0, n - 1);
      newValue = Number(newValue);
      var num2 = inpt2.value;
      num2 = Number(num2);
      inpt1.value = newValue / num2;
      inpt1.value = inpt1.value + "x";
      inpt2.value = "";
    } else {
      alert("Enter symbol to calculate or enter valid operation.")
    }
  }
}
//Equal function
function equal() {
  var inpt1 = document.querySelector("#inpt1").value;
  var inpt2 = document.querySelector("#inpt2").value;
  if (inpt1 != "" && inpt2 != "") {
    var n = inpt1.length;
    var symbol = inpt1.slice(n - 1, n);
    if (symbol == "-") {
      var newValue = inpt1.slice(0, n - 1);
      newValue = Number(newValue);
      inpt2 = Number(inpt2);
      document.querySelector("#inpt1").value = newValue - inpt2;
      document.querySelector("#inpt2").value = "";
    }
    else if (symbol == "+") {
      var newValue = inpt1.slice(0, n - 1);
      newValue = Number(newValue);
      inpt2 = Number(inpt2);
      document.querySelector("#inpt1").value = newValue + inpt2;
      document.querySelector("#inpt2").value = "";
    }
    else if (symbol == "x") {
      var newValue = inpt1.slice(0, n - 1);
      newValue = Number(newValue);
      inpt2 = Number(inpt2);
      document.querySelector("#inpt1").value = newValue * inpt2;
      document.querySelector("#inpt2").value = "";
    } else if (symbol == "/") {
      var newValue = inpt1.slice(0, n - 1);
      newValue = Number(newValue);
      inpt2 = Number(inpt2);
      document.querySelector("#inpt1").value = newValue /inpt2;
      document.querySelector("#inpt2").value = "";
    }
  } else {
    alert("Enter some number to perform the task.")
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("backspace").addEventListener("click", backspace);
  document.getElementById("clear").addEventListener("click", clear);
  document.getElementById("plusSign").addEventListener("click", add);
  document.getElementById("divideSign").addEventListener("click", divide);
  document.getElementById("minusSign").addEventListener("click", sub);
  document.getElementById("multiSign").addEventListener("click", multi);
  document.getElementById("equalSign").addEventListener("click", equal);
  document.getElementById("decimalSign").addEventListener("click", addDecimal);
});

