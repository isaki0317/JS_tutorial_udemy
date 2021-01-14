function* genIterator(max = 0) {
  let i = 0;

  while(i < max) {
    yield i++;
  }
  return;
}

const it = genIterator(10);

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}