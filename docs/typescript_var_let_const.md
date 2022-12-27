
&nbsp;  
### var
1. [var可以assign多次.](./examples/01_assign.js)  
2. [var在scope方面不严谨: 条件块内的变量定义未执行, 条件块外的代码也视该变量为有效变量.](./examples/02_scope.js)  
3. [var在scope方面不严谨: 异步提交的setTimeout函数, 读取的变量值是被唤醒时刻的变量值.](./examples/03_settimeout.js)  
4. [var在scope方面不严谨: 多层级循环时, 父子域定义的相同变量名, 缺乏隔离机制.](./examples/04_forloop.js)  

&nbsp;  
### let
1. [let只能assign一次(跟golang一样).](./examples/01_assign.ts)  
2. [let在scope方面严谨: 条件块内定义的变量, 无法被在条件块之外的代码访问.](./examples/02_scope_01.ts)  
3. [let在scope方面严谨: 异常块中的变量, 无法被异常块外的代码访问](./examples/02_scope_02.ts)  
4. [let在scope方面严谨: 异步提交的setTimeout函数, 读取的变量是挂起时刻的变量值](./examples/03_settimeout.ts)  
5. [let在scope方面严谨: 多层级循环时, 会按照隔离办法来处理](./examples/04_forloop.ts)  

&nbsp;  
### const  
1. []


&nbsp;  
### 参考资料
https://www.typescriptlang.org/docs/handbook/variable-declarations.html  
