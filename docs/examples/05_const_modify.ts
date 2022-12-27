// 运行当前代码: npx ts-node docs/examples/05_const_modify.ts
const h = 20
h++


// 运行代码:
// $ npx ts-node docs/examples/05_const_modify.ts


// 报错信息: 是说不能再次赋值.
// /home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:859
// return new TSError(diagnosticText, diagnosticCodes, diagnostics);
//        ^
// TSError: ⨯ Unable to compile TypeScript:
// docs/examples/05_const_modify.ts:2:1 - error TS2588: Cannot assign to 'h' because it is a constant.

// 2 h++
// ~

// at createTSError (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:859:12)
// at reportTSError (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:863:19)
// at getOutput (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:1077:36)
// at Object.compile (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:1433:41)
// at Module.m._compile (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:1617:30)
// at Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
// at Object.require.extensions.<computed> [as .ts] (/home/zt/VSCodeProjects/xx/electron-demo/node_modules/ts-node/src/index.ts:1621:12)
// at Module.load (node:internal/modules/cjs/loader:1033:32)
// at Function.Module._load (node:internal/modules/cjs/loader:868:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
// diagnosticCodes: [ 2588 ]
// }
