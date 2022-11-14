const quick_sort = (arr) => {
    divide(arr, 0, arr.length - 1);
}

const divide = (arr, first, last) => {
    const MIN_SIZE = 5;
    if ((last - first) + 1 < MIN_SIZE) {
        insertion_sort(arr, first, last + 1);
    } else {
        let pivot_index = partition(arr, first, last);
        divide(arr, first, pivot_index);
        divide(arr, pivot_index + 1, last);    
    }
}

const partition = (arr, first, last) => {
    const mid = Math.floor((first + last) / 2);
    sort_first_middle_last(arr, first, mid, last);

    [arr[mid], arr[last - 1]] = [arr[last - 1], arr[mid]];
    let pivot_index = last - 1;
    const pivot_value = arr[pivot_index];
		
    let left_index = first + 1;
    let right_index = last - 2;
    let done = false;

    while (!done) {
        while (arr[left_index] < pivot_value) {
            left_index++;
        }
        while (arr[right_index] > pivot_value) {
            right_index--;
        }

        if (left_index < right_index) {
            [arr[left_index], arr[right_index]] = [arr[right_index], arr[left_index]];
            left_index++;
            right_index--;
        } else {
            done = true;
        }
    }

    [arr[pivot_index], arr[left_index]] = [arr[left_index], arr[pivot_index]];
    return left_index;
}

const sort_first_middle_last = (arr, first, mid, last) => {
    if (arr[first] > arr[mid]) {
        [arr[first], arr[mid]] = [arr[mid], arr[first]];
    }
    if (arr[mid] > arr[last]) {
        [arr[mid], arr[last]] = [arr[last], arr[mid]];
    }
    if (arr[first] > arr[mid]) {
        [arr[first], arr[mid]] = [arr[mid], arr[first]];
    }
}

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