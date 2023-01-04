let x = 10;

function testX(x) {
  if (x > 15) {
    console.log("x est supérieur à 15");
    return x;
  } else if (x > 5) {
    console.log("x est supérieur à 5 et inférieur ou égal à 15");
    x = x + 5;
    return x;
  } else {
    console.log("x est inférieur ou égal à 5");
    x = x + 5;
    return x;

  }
 
  return x;
}

console.log(testX(x));
console.log(testX(x));

let t = testX(4);