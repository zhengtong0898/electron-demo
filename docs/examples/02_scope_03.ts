// 运行当前代码: node docs/examples/02_scope_02.ts
try {
  throw "oh no!";
} catch (e) {
  console.log("Oh well.");
  const good = "s"
}
// Error: 'e' doesn't exist here
console.log(e);
console.log(good)


// 运行代码
// $ npx ts-node docs/examples/02_scope_02.ts


// 报这个错误, 是说异常块外的代码无法访问到e变量.
// /home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:859
//     return new TSError(diagnosticText, diagnosticCodes, diagnostics);
//            ^
// TSError: ⨯ Unable to compile TypeScript:
// docs/examples/02_scope_02.ts:7:13 - error TS2304: Cannot find name 'e'.
//
// 7 console.log(e);
//               ~
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
