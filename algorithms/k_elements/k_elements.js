const topKFrequent = function(nums, k) {
    let freqMap = {};
    for (n of nums) {
        freqMap[n] = ++freqMap[n] || 1;
    }
    
    let freqArr = [];
    for (int in freqMap) {
        let freq = freqMap[int];
        
        if (!freqArr[freq]) {
            freqArr[freq] = [int];
        } else {
            freqArr[freq].push([int])
        }
    }
    
    let res = [];
    for (let i = freqArr.length - 1; i >= 0; i--) {
        if (!freqArr[i]) continue;
        
        for (let j = 0; j < freqArr[i].length; j++) {
            
            res.push(freqArr[i][j]);
            if (res.length >= k) return res;
        }
    }
}