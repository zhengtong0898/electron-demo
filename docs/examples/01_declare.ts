// 运行当前代码: npx ts-node docs/examples/01_assign.ts
let a = 10;
let a = "hello world"

console.log(a);


// 运行代码
// $ npx ts-node docs/examples/01_assign.ts


// 报这个错误, 是说不能重复生命一个变量.
// /home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:859
//     return new TSError(diagnosticText, diagnosticCodes, diagnostics);
//            ^
// TSError: ⨯ Unable to compile TypeScript:
// docs/examples/01_assign.ts:2:5 - error TS2451: Cannot redeclare block-scoped variable 'a'.
//
// 2 let a = 10;
//       ~
// docs/examples/01_assign.ts:3:5 - error TS2451: Cannot redeclare block-scoped variable 'a'.
//
// 3 let a = "hello world"
//       ~
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
//   diagnosticCodes: [ 2451, 2451 ]
// }
