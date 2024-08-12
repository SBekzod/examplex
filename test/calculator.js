const calt = {};

// add
calt.add = (a, b) => {
  console.log("add executed");
  return a + b;
};

// minus
calt.minus = (a, b) => {
  console.log("minus executed");
  return a - b;
};

// multiply
calt.multiply = (a, b) => {
  console.log("multiply executed");
  return a * b;
};

module.exports = calt;
