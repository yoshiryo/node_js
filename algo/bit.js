function bit_all(n) { //bit全探索のコード
    for (let bit = 0; bit < (1 << n); bit++) {
        let row = []
        for (let i = 0; i < n; i++) {
            if (bit & (1 << i)) {
                row.push(i)
            }
        }
        console.log(row)
    }
}
function bit_flag() { //bit flag
    for (let i = 0; i < n; i++) {
        if (x & (1 << i)) {
            ans.push(a[i]);
        }
    }
}