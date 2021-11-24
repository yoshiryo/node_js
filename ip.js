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

    function ip2long(ip_array){
        let ip_long = "";
        for (let i = 0; i < 4; i++) {
            let ip2 = Number(ip_array[i]).toString(2);
            ip_long += ("00000000" + ip2).slice(-8);
        }
        return parseInt(ip_long, 2);
    }

    function inRange(remote, accept, cidr) {
        const remoteIpNetwork = remote >>> (32 - cidr);
        const acceptIpNetwork = accept >>> (32 - cidr);
        return remoteIpNetwork === acceptIpNetwork
    }  
    // ネットワークアドレス
    function getNetworkAddr(ip, mask) {
        return (ip & mask) >>> 0
    }
    // ブロードキャストアドレス
    function getBroadcastAddr(ip, mask) {
        return (ip | ~subnetmask) >>> 0
    }
    
    //この中に処理を記述
    let ip = lines[0];
    let mask = "10.1.160.0/20".split("/");
    let ip_array = ip.split(".");
    let ip_mask_array = mask[0].split(".");
    let cidr = parseInt(mask[1], 10);

    let remote = ip2long(ip_array);
    let accept = ip2long(ip_mask_array);
    console.log();
});