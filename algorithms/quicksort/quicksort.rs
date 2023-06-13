fn quick_sort<T: Ord + Copy>(arr: &mut [T]) {
    divide(arr, 0, arr.len() - 1);
}

fn divide<T: Ord + Copy>(arr: &mut [T], first: usize, last: usize) {
    const MIN_SIZE: usize = 5;
    if last - first + 1 < MIN_SIZE {
        insertion_sort(arr);
    } else {
        let pivot_index = partition(arr, first, last);
        divide(arr, first, pivot_index - 1);
        divide(arr, pivot_index + 1, last);
    }
}

fn partition<T: Ord + Copy>(arr: &mut [T], first: usize, last: usize) -> usize {
    let mid: usize = (first + last) / 2;
    sort_first_middle_last(arr, first, mid, last);

    arr.swap(mid, last - 1);
    let pivot_index = last - 1;
    let pivot_value: T = arr[pivot_index];

    let mut left_index = first + 1;
    let mut right_index = last - 2;
    let mut done = false;

    while !done {
        while arr[left_index] < pivot_value {left_index += 1;}
        while arr[right_index] > pivot_value {right_index -= 1;}
        if left_index < right_index {
            arr.swap(left_index, right_index);
            left_index += 1;
            right_index -= 1;
        } else {
            done = true;
        }
    }

    arr.swap(left_index, pivot_index);
    left_index
}

fn sort_first_middle_last<T: Ord>(arr: &mut [T], first: usize, mid: usize, last: usize) {
    if arr[first] > arr[mid] {arr.swap(first, mid);}
    if arr[mid] > arr[last] {arr.swap(mid, last);}
    if arr[first] > arr[mid] {arr.swap(first, mid);}
}

fn insertion_sort<T: Ord + Copy>(arr: &mut [T]) {
    for i in 0..arr.len()-1 {
          insert(arr, i, arr[i+1]);
    }
}

fn insert<T: Ord>(arr: &mut [T], sorted_index: usize, current: T) {
    for j in (0..=sorted_index).rev() {
          if current >= arr[j] {
                arr[j+1] = current;
                break;
          };
          arr.swap(j, j+1);
    }
}