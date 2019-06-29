function dynamicArray(n, queries) {
    function createSequence(n) {
        for (let i = 0; i < n; i++) {
            let emptySequence = [];
            seqList.push(emptySequence);
        }
    }

    function queryOne(query) {
        seqList[(query[1] ^ lastAnswer) % n].push(query[2])
    }

    function queryTwo(query) {
        let seq = seqList[(query[1] ^ lastAnswer) % n];
        lastAnswer = seqList[(query[1] ^ lastAnswer) % n][query[2]];
        console.log(lastAnswer);
    }
    
    let lastAnswer = 0;
    let seqList = [];
    createSequence(n);
    for (let query of queries) {
        if (query[0] === 1) queryOne(query);
        else queryTwo(query);
    }
}
