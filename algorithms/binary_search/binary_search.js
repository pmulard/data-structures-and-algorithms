const binary_search = (arr, target) => {
    let low = 0,
        high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((high - low) / 2) + low;
        if (arr[mid] == target) {
            return mid
        }
        if (arr[mid] < target) {
            low = mid + 1;
        } else { // arr[mid] > target
            high = mid - 1;
        }
    }
    return -1;
}