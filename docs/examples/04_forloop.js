// 运行当前代码: node docs/examples/04_forloop.js
function sumMatrix(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}


var result = sumMatrix(
  [
    [1,2,3],
    [4,5,6]
  ]
)


// 通过Debug发现: 父循环的i会沿用子循环的i继续遍历, 这会导致数据不一致.
console.log(result)
