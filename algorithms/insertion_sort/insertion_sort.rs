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