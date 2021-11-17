function bfs(h, w, table, start) {
    const d = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const queue = [];
    const H = table.length
    const W = table[0].length
    const min = [...Array(H)].map(n => [...Array(W)].fill("*"));
    queue.push(start);
    min[start[0]][start[1]] = 0;
    // Queue に残りがある限りループする
    while (queue.length > 0) {
        const p = queue.shift();
        // ゴールに到着しているならbreak
        if (p[0] === 0 || p[0] === h-1 || p[1] === 0 || p[1] === w-1) {
            return true;
        }
        // 右、下、左、上の順でチェック
        for (let i = 0; i < d.length; i++) {
            const next_y = p[0] + d[i][0];
            const next_x = p[1] + d[i][1];
            // はみ出し、壁衝突を考慮する
            if (next_y < 0 || W <= next_x) continue;
            if (next_x < 0 || H <= next_y) continue;
            if (table[next_y][next_x] === '#') continue;
            if (min[next_y][next_x] !== '*') continue;
            // 新しいポジションへの移動は現地点への最短経路+1となる
            queue.push([next_y, next_x]);
            min[next_y][next_x] = min[p[0]][p[1]] + 1;
        }
    }
    return false;
}

main()
function main() {
    const S = [1, 1] // start
    const T = [
        "###.####",
        "#.#....#",
        "#.###..#",
        "#......#",
        "########",
    ].map(n => n.split(""));
    const answer = bfs(h, w, T, S);
    if (answer) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}