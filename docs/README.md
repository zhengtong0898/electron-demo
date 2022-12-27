
&nbsp;  
### Typescript
1. [官网教程](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)  

2. [var、let、const的区别](./typescript_var_let_const.md)  

3. [import的语法和含义]()  

4. [export的语法和含义]()  


&nbsp;     
### Vue


function f(input: boolean) {
  var a = 100;
  if (input) {
    // Still okay to reference 'a'
    var b = a + 1;
    return b;
  }
  // Error: 'b' doesn't exist here
  return c;
}