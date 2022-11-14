fn selection_sort<T: Ord + Copy + Clone>(arr: &mut [T]) {
    for i in 0..arr.len()-1 {
        let mut min_index = i.clone();
        for j in i..arr.len() {
            if arr[j] < arr[min_index] {
                min_index = j;
            }
        }
        arr.swap(i, min_index);
    }
}