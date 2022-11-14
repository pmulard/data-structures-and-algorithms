const merge_sort = (arr) => {
    let temp_arr = Array(arr.length);
    divide(arr, temp_arr, 0, arr.length-1);
}

const divide = (arr, temp_arr, start, end) => {
    if (start < end) {
          const mid = Math.floor((start + end) / 2);
          divide(arr, temp_arr, start, mid);
          divide(arr, temp_arr, mid+1, end);
          merge(arr, temp_arr, start, mid, end);
    }
}

const merge = (arr, temp_arr, start, mid, end) => {
    let i = start,
          j = mid+1,
        k = start;

    while (i <= mid && j <= end) {
          if (arr[i] < arr[j]) {
                temp_arr[k] = arr[i];
                i++;
          } else {
                temp_arr[k] = arr[j];
                j++;
          }
          k++;
    }

      while (i <= mid) {
          temp_arr[k] = arr[i];
          i++;
          k++;
    }

    while (j <= end) {
          temp_arr[k] = arr[j];
          j++;
          k++;
    }

    for (let l = start; l <= end; l++) {
          arr[l] = temp_arr[l];
    }
}