// good
let a = 3;
let b = 1;
let t = 0;
t = a;
a = b;
b = t;

// very good
let a = 3;
let b = 1;
[a, b] = [b, a];
