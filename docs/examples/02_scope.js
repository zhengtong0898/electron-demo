// 运行当前代码: node docs/examples/02_scope.js
function var_scope(shouldInitialize) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x;
}

// 当入参是 false 时, x应该是没有执行assign动作的,
// 后续代码return x, 应该是要报错的, 但是这里并没有报错.
console.log(var_scope(true));                         // returns '10'
console.log(var_scope(false));                        // returns 'undefined'


// 符合预期的行为请参考这个代码文件: docs/examples/02_
