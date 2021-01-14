const map = new Map();
const key1 = {};

map.set(key1, 'value');
console.log(map.get(key1))

const key2 = function() {}
map.set(key2, 'value2')
console.log(map.get(key2))

let key3;
map.set(key3 = 0, 'value3');

map.delete(key3);
console.log(map.get(0));



const s = new Set();
s.add(key1);
s.add(key1);

console.log(s.has(key2))

for(let k of s) {
  console.log(k)
}