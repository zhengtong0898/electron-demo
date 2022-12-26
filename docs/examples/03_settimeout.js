// 运行当前代码: node docs/examples/03_settimeout.ts
for (var i = 0; i < 10; i++) {
  setTimeout(
    function () {
      console.log(i);
    },
    100
  );
}


// 输出:
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10


// 补充说明:
// 由于子域代码可以访问父域的变量, 因此子域代码`console.log(i)`是可以访问到for循环父域的变量`i`.
// 由于setTimeout采取的是异步执行, 它相当于被扔到后台去挂起等待100毫秒后再执行,
// 在等待过程中for已经执行完成了, 此时i已经昨晚所有++操作,
// 当setTimeout被唤醒时, i的变量已经是10, 因此子域代码访问到的变量i的值都是10.
