process.stdin.setEncoding("utf8");

var lines = []; 
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  //改行ごとに"line"イベントが発火される
  lines.push(line); //ここで、lines配列に、標準入力から渡されたデータを入れる
});
reader.on("close", () => {
  //標準入力のストリームが終了すると呼ばれる
  //この中に処理を記述
  n = lines[0];
  let l = new Set();
  for (let i = 1; i <= n; i++){
    l.add(lines[i]);
  }
  console.log(l.size)
});
