process.stdin.setEncoding("utf8");

var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
    let w = lines[0];
    let vowel = ["a", "i", "u", "e", "o"];
    let ans = "";
    for (let i = 0; i < w.length; i++) {
        let judge = false;
        for (let j = 0; j < vowel.length; j++) {
            if (w[i] == vowel[j]) {
                judge = true;
                break
            }
        }
        if (!judge) {
            ans += w[i];
        }
    }
    console.log(ans)
});