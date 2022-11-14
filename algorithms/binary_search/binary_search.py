def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while (low <= high):
        mid = math.floor((high - low) / 2) + low
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            low = mid + 1
        else: # arr[mid] > target
            high = mid - 1
    return -1