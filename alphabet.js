const textInput = document.querySelector(".inputText");
const convertBtn = document.querySelector(".convert__btn");
const outputArea1 = document.querySelector(".num__result");
const outputArea2 = document.querySelector(".sum-of-num__result");

const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 8,
  g: 3,
  h: 5,
  i: 1,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  o: 7,
  p: 8,
  q: 1,
  r: 2,
  s: 3,
  t: 4,
  u: 6,
  v: 6,
  w: 6,
  x: 5,
  y: 1,
  z: 7,
};

const convert = function () {
  const input = textInput.value;
  let total = 0;
  let sumOfNumbers = 0;

  // if the input is a number calculate the sum of the numbers
  if (!isNaN(input)) {
    let intArr = Array.from(String(input), Number);
    sumOfNumbers = intArr.reduce((a, b) => a + b);
    outputArea2.innerHTML = sumOfNumbers;
    outputArea1.innerHTML = "";
  } else {
    // if the input is a string change that alphabets to numbers that assigned
    let char = input.split("");
    for (let i = 0; i < char.length; i++) {
      total += alphabet[char[i]];
    }
    outputArea1.innerHTML = total;
    outputArea2.innerHTML = "";
  }
};

// EVENT LISTENERS
convertBtn.addEventListener("click", convert);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    convert();
  }
});

// function SumOfChangeStrToNum(str) {
//   if (typeof str === "number") return;
//   let char = str.split("");
//   let total = 0;
//   for (let i = 0; i < char.length; i++) {
//     total += alphabet[char[i]];
//   }
//   return total;
// }

// console.log(SumOfChangeStrToNum("abcdxs"));
// console.log(SumOfChangeStrToNum("arfgty"));
// console.log(SumOfChangeStrToNum("aaaaaa"));
// console.log(SumOfChangeStrToNum(11));
