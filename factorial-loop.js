/*
1 = 1 X 1
2 = 2 X 1
3 = 3 X 2 X 1 
4 = 4 X 3 X 2 X 1 
5 = 5 X 4 X 3 X 2 X 1 
6 = 6 X 5 X 4 X 3 X 2 X 1 
7 = 7 X 6 X 5 X 4 X 3 X 2 X 1 
8 = 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1 
9 = 9 X 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1 
10 = 10 X 9 X 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1 
factorial process for java scrpt */



var factorial = 1;
for (var i = 1; i <= 10; i++){
    factorial = factorial * i;
}
console.log(factorial);
