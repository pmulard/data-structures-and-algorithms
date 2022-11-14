const bubble_sort = (arr) => {
    for (i=0; i<arr.length-1; i++) {
        for (j=0; j<arr.length-1-i; j++) {
              if (arr[j] > arr[j+1]) {
                            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
              }
        }
  }
  return arr;
}