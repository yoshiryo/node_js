function toCountDict(array){ //配列に含まれる要素を数えて連想配列で返す
    let dict = {};
    for(let key of array){
        dict[key] = array.filter(function(x){return x==key}).length;
    }
    return dict;
}

const returnLatestdata = req => { //アロー関数で連想配列の最小値を取得
    let hashList = req;
    let tempAgeList = hashList.map(element => {
        return element.age
    });
    let elmNum = tempAgeList.indexOf(Math.min.apply(null, tempAgeList));
    return hashList[elmNum];
};