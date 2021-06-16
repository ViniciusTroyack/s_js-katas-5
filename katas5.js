//Kata 01;

const testeReverseString1 = () => {
  let result = reverseString("Vinicius Troyack");
  let expected = "kcayorT suiciniV";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const testeReverseString2 = () => {
  let result = reverseString("0123456789");
  let expected = "9876543210";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

testeReverseString1();
testeReverseString2();

//Kata 02;

const testReverseSentence1 = () => {
  let result = reverseSentence("Testando inversor de sentencas");
  let expected = "sentencas de inversor Testando";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const testReverseSentence2 = () => {
  let result = reverseSentence("27 / 12 / 1994");
  let expected = "1994 / 12 / 27";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const reverseSentence = (string) => {
  return string.split(" ").reverse().join(" ");
};

testReverseSentence1();
testReverseSentence2();

//Kata 03;

const testMinimumValue1 = () => {
  let result = minimumValue([10, 50, 30, 05]);
  let expected = 05;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const testMinimumValue2 = () => {
  let result = minimumValue([01, -01, 02, -02]);
  let expected = -02;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const minimumValue = (arry) => {
  return Math.min(...arry);
};

testMinimumValue1();
testMinimumValue2();

//Katas 04;

const testMaximumValue1 = () => {
  let result = maximumValue([05, 08, 11, 03, 04]);
  let expected = 11;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const testMaximumValue2 = () => {
  let result = maximumValue([0.5, 1, 0.4, 0.999]);
  let expected = 1;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const maximumValue = (arry) => {
  return Math.max(...arry);
};

testMaximumValue1();
testMaximumValue2();

//Katas 05;

const testCalculateRemainder1 = () => {
  let result = calculateRemainder(13, 2);
  let expected = 1;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const testCalculateRemainder2 = () => {
  let result = calculateRemainder(40831, 4);
  let expected = 3;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const calculateRemainder = (a, b) => {
  return a % b;
};

testCalculateRemainder1();
testCalculateRemainder2();

//Kata 06

const testDistinctValues1 = () => {
  let result = distinctValues("1 3 5 3 7 3 1 1 5");
  let expected = "1 3 5 7";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const testDistinctValues2 = () => {
  let result = distinctValues("a 2 a 3 teste b");
  let expected = "2 3 a b teste";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const distinctValues = (string) => {
  let arry = string.split(" ").sort();
  let output = [];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] !== arry[i + 1]) {
      output.push(arry[i]);
    }
  }
  return output.join(" ");
};

testDistinctValues1();
testDistinctValues2();

//Kata 07

const testCountValues1 = () => {
  let result = countValues("1 3 5 3 7 3 1 1 5");
  let expected = "1(3) 3(3) 5(2) 7(1)";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const testCountValues2 = () => {
  let result = countValues("-1 5 -1 5 1 5 aa ab ba aa");
  let expected = "-1(2) 1(1) 5(3) aa(2) ab(1) ba(1)";
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
};

const countValues = (string) => {
  let output = [];
  let newArray = string.split(" ");
  let arryUnico = distinctValues(string).split(" ");

  for (let i = 0; i < arryUnico.length; i++) {
    let count = 0;
    for (let j = 0; j < newArray.length; j++) {
      if (arryUnico[i] === newArray[j]) {
        count++;
      }
    }
    output.push(arryUnico[i] + `(${count})`);
  }
  return output.join(" ");
};

testCountValues1();
testCountValues2();

//Kata 08

function testEvaluateExpression1() {
  let result = evaluateExpression("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 });
  let expected = -3;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

function testEvaluateExpression2() {
  let result = evaluateExpression("a + c * b / d", { a: 1, b: 8, c: 5, d: 10 });
  let expected = 4.8;
  console.assert(
    result === expected,
    `esperado: ${expected}, obtido: ${result}`
  );
}

const evaluateExpression = (expression, obj) => {
  let arrayExpression = expression.split(" ");
  let result = obj[arrayExpression[0]];
  for (let i = 1; i < arrayExpression.length; i += 2) {
    if (arrayExpression[i] === "+") {
      result += obj[arrayExpression[i + 1]];
    }
    if (arrayExpression[i] === "-") {
      result -= obj[arrayExpression[i + 1]];
    }
    if (arrayExpression[i] === "*") {
      result *= obj[arrayExpression[i + 1]];
    }
    if (arrayExpression[i] === "/") {
      result /= obj[arrayExpression[i + 1]];
    }
  }

  return result;
};

testEvaluateExpression1();
testEvaluateExpression2();
