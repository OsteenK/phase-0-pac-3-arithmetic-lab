var a, b



function add(a,b) {
  return (a += b);
}
function subtract(a,b) {
    return (a -= b);
}
function multiply(a,b) {
    return (a *= b);
}

function divide(a,b) {
    return (a /= b);
}
function increment(a) {
    return (a = a + 1);
  }
function decrement(a) {
    return (a = a - 1);
  }

function makeInt(a) {
    return (a = a );
  }
 
function preserveDecimal(a) {
    return (a = a );
  }


function makeInt(a){
    return parseInt(a, 10)
    }

function preserveDecimal(a){
  return parseFloat(a,2.222)
      }