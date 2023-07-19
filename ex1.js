let sum = 0;
const array = new Array(1000).fill(0);

console.time("loop");
for (let i=0; i<array.length; i++) {
    sum++;
}
console.timeEnd("loop");

console.log(sum);

sum = 0;

console.time("loop");
for (let i=0, max=array.length; i<max; i++) {
    sum++;
}
console.timeEnd("loop");

console.log(sum);
