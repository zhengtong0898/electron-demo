// 运行当前代码: node docs/examples/02_scope_01.ts
function let_scope(shouldInitialize: boolean) {
  if (shouldInitialize) {
    let x = 10;
  }
  return x;
}


// 由于当前代码是不可执行的, 因此这里没有输出, 代码不会执行到这里, 代码会在检查阶段就报错了.
console.log(let_scope(true));
console.log(let_scope(false));


// 运行代码
// $ npx ts-node docs/examples/02_scope_01.ts


// 报这个错误, 是说条件块外部的代码无法访问到x变量.
// /home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:859
//     return new TSError(diagnosticText, diagnosticCodes, diagnostics);
//            ^
// TSError: ⨯ Unable to compile TypeScript:
// docs/examples/02_scope.ts:6:10 - error TS2304: Cannot find name 'x'.
//
// 6   return x;
//            ~
//
//     at createTSError (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:859:12)
//     at reportTSError (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:863:19)
//     at getOutput (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:1077:36)
//     at Object.compile (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:1433:41)
//     at Module.m._compile (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:1617:30)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
//     at Object.require.extensions.<computed> [as .ts] (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:1621:12)
//     at Module.load (node:internal/modules/cjs/loader:1033:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:868:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
//   diagnosticCodes: [ 2304 ]
// }
