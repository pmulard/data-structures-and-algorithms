fn merge_sort<T: Ord + Copy>(arr: &mut [T]) {
    let mut temp_arr: Vec<T> = Vec::new();
    for i in 0..arr.len() {
        temp_arr.push(arr[i]);
    }
    divide(arr, &mut temp_arr, 0, arr.len() - 1);
}

fn divide<T: Ord + Copy>(arr: &mut [T], temp_arr: &mut Vec<T>, start: usize, end: usize) {
    if start < end {
        let mid: usize = (start + end) / 2;
        divide(arr, temp_arr, start, mid);
        divide(arr, temp_arr, mid+1, end);
        merge(arr, temp_arr, start, mid, end);
    }
}

fn merge<T: Ord + Copy>(arr: &mut [T], temp_arr: &mut Vec<T>, start: usize, mid: usize, end: usize) {
    let mut i: usize = start.clone();
    let mut j: usize = mid + 1;
    let mut k: usize = start.clone();

    while i <= mid && j <= end {
        if arr[i] < arr[j] {
            temp_arr[k] = arr[i];
            i += 1;
        } else {
            temp_arr[k] = arr[j];
            j += 1;
        }
        k += 1;
    }

    while i <= mid {
        temp_arr[k] = arr[i];
        i += 1;
        k += 1;
    }

    while j <= end {
        temp_arr[k] = arr[j];
        j += 1;
        k += 1;
    }

    for l in 0..=end {
        arr[l] = temp_arr[l];
    }
}
