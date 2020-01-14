const sentence = "hello there from lighthouse labs";
let increment = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, increment)
  increment += 100;
}
time = sentence.length * 100
setTimeout(() => {
  console.log();
}, time)
