// 运行当前代码: npx ts-node docs/examples/04_forloop.ts
function sumMatrix2(matrix: number[][]) {
  var sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}


var result = sumMatrix2(
  [
    [1,2,3],
    [4,5,6]
  ]
)


// 父循环的let i变量和子循环的let i变量是相互隔离的, 互不影响, 因此可以重复assign.
console.log(result)
