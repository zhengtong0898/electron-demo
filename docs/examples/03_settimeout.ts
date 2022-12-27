// 运行当前代码: npx ts-node docs/examples/03_settimeout.ts
for (let i = 0; i < 10; i++) {
  setTimeout(
    function () {
      console.log(i);
    },
    100
  );
}


// 输出:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// 补充说明:
// 由于变量在scope中是具有隔离性的, 因此挂起时就相当于是传递了一个变量进去.
