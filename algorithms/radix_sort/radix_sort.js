const radix_sort = (arr, base = 10) => {
    for (let i = 0; i < max_digits(arr); i++) {
        let buckets = Array.from({length: 10}, () => []);
        for (let num of arr) {
            let digit = get_digit(num, i, base);
            buckets[digit].push(num);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

const get_digit = (num, place, base) => {
    return Math.floor(Math.abs(num) / Math.pow(base, place)) % base;
}

const digit_count = (num) => {
    if (num == 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const max_digits = (arr) => {
    let max = 0;
    for (let num of arr) {
        max = Math.max(max, digit_count(num)); 
    }
    return max;
}