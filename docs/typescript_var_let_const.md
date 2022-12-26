
### var
1. [var可以assign多次.](./examples/01_assign.js)  
2. [var只要在当前scope中定义, 即便是躲在条件块内定义并且没有被执行, 也是有效的(此时被视为undefine).](./examples/02_scope.js)  
3. [var配合setTimeout运行, 会在最后时刻才读取所在scope的变量.](./examples/03_settimeout.js)  
4. [var作用在多层级循环中时, 会出现紊乱的情况.](./examples/04_forloop.js)  

### let
1. [let只能assign一次(跟golang一样).](./examples/01_assign.ts)  
2. [let严格控制scope范围: 条件块内定义的变量, 无法被在条件块之外的代码访问.](./examples/02_scope.ts)  
3. [let严格控制scope范围: 异常块中的变量, 无法被异常块外的代码访问](./examples/02_scope_02.ts)  
4. [let严格控制scope范围: 父子域变量名相同时, 采用隔离办法来处理](./examples/02_scope_03.ts)  
5. [let配合setTimeout运行, 会按照传值的形式来执行](./examples/03_settimeout.ts)  
6. [let作用在多层级循环中时, 会按照隔离办法来处理](./examples/04_forloop.ts)


### 参考资料
https://www.typescriptlang.org/docs/handbook/variable-declarations.html