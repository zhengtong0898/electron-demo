// 运行当前代码: npx ts-node docs/examples/06_const_array.ts
const numbers = new Array(1,4,9);
numbers.push(10);
console.log(numbers)


// 输出:
// [ 1, 4, 9, 10 ]


// 补充说明:
// 虽然是const关键字声明的变量, 但是当它类型是数据结构时, 它的值仍然是可以修改的.
