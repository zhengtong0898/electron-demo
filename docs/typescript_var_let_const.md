
&nbsp;  
### var
1. [var可以declare多次.](./examples/01_declare.js)  
2. [var在scope方面不严谨: 条件块内的变量定义未执行, 条件块外的代码也视该变量为有效变量.](./examples/02_scope.js)  
3. [var在scope方面不严谨: 异步提交的setTimeout函数, 读取的变量值是被唤醒时刻的变量值.](./examples/03_settimeout.js)  
4. [var在scope方面不严谨: 多层级循环时, 父子域定义的相同变量名, 缺乏隔离机制.](./examples/04_forloop.js)  

&nbsp;  
### let
1. [let只能declare一次(跟golang一样).](./examples/01_declare.ts)  
2. [let可以assign多次](./examples/02_assign_let.ts)  
2. [let在scope方面严谨: 条件块内定义的变量, 无法被在条件块之外的代码访问.](./examples/02_scope_01.ts)  
3. [let在scope方面严谨: 异常块中的变量, 无法被异常块外的代码访问](./examples/02_scope_02.ts)  
4. [let在scope方面严谨: 异步提交的setTimeout函数, 读取的变量是挂起时刻的变量值](./examples/03_settimeout.ts)  
5. [let在scope方面严谨: 多层级循环时, 会按照隔离办法来处理](./examples/04_forloop.ts)  
6. [let的值为基础类型时, 可以修改.](./examples/05_let_modify.ts)  
7. [let的值为数据结构时, 可以修改.](./examples/06_let_array.ts)  


&nbsp;  
### const  
1. const只能declare一次(跟let一样).  
2. [const只能assign一次.](./examples/02_assign_const.ts)  
2. [const的值为基础类型时, 无法修改.](./examples/05_const_modify.ts)  
3. [const的值为数据结构时, 可以修改.](./examples/06_const_array.ts)  


&nbsp;  
### let 和 const 的区别

相同点:  
1. 都是只能declare一次.  
2. 拥有相同的scope规则.  
3. [都可以修改数据结构类型的值.](./examples/06_let_array.ts)  

不同点:   
1. let可以assign多次, 而const只能assign一次.  
2. let可以用于循环递增变量, 而const不能用于循环递增变量.  
3. let可以修改(assign)基础类型的值, 而const不能修改(assign)基础类型的值.  

&nbsp;  
### 什么时候用 const 什么时候用 let?  
当我们知道这个变量是需要做修改操作的时候, 这个变量使用let.  
其他情况使用const.  


&nbsp;  
### 参考资料
https://www.typescriptlang.org/docs/handbook/variable-declarations.html  
