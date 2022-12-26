// 运行当前代码: node docs/examples/02_scope.js
function x() {
  let a = 10;
  return function g() {
    let b = a + 1;
    return b;
  };
}


// 运行f函数, 返回g函数.
var g = x();


// g
console.log(g());
