const toggleTheme = document.querySelector("#switch");
const display = document.getElementById("display");

toggleTheme.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});

function appendNumber(number) {
  display.textContent += number;
}

function appendSymbol(symbol) {
  display.textContent += " " + symbol + " ";
}

function clearresult() {
  display.textContent = "";
}

function calculate() {
  const symbols = ["+", "-", "*", "/", "%"];
  const input = display.textContent;
  const str = input.split(" ");
  console.log(str);
  let result = 0;
  let currSymbol;

  for (let i = 0; i < str.length; i++) {
    if (symbols.includes(str[i])) {
      currSymbol = str[i];
      console.log("currSymbol = ", currSymbol);
    } else {
      let num = parseFloat(str[i]);
      if (currSymbol === "+") {
        result += num;
        console.log(result);
      } else if (currSymbol === "-") {
        result -= num;
      } else if (currSymbol === "*") {
        result *= num;
      } else if (currSymbol === "/") {
        result /= num;
      } else if (currSymbol === "%") {
        result %= num;
      } else {
        result += num;
      }
    }
    console.log("result = ", result);
  }
  display.textContent = result;
}

// else if (str[i] === "(" || str[i] === ")" || str[i] === "") {
//   continue;
// }
