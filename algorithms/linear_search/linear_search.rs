fn linear_search<T: PartialEq>(arr: &[T], target: &T) -> Option<usize> {
    for i in 0..arr.len() {
        if &arr[i] == target {
            return Some(i);
        }
    }
    None
}