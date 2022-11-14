const insertion_sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
          insert(arr, i, arr[i+1]);
    }
}

const insert = (arr, sortedIndex, current) => {
      let j = sortedIndex
    for (j; j >= 0 && current < arr[j]; j--) {
          arr[j+1] = arr[j]; 
    }
      arr[j+1] = current;
}