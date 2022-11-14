import math

def merge_sort(arr):
    temp_arr = arr.copy()
    divide(arr, temp_arr, 0, len(arr)-1)

def divide(arr, temp_arr, start, end):
    if (start < end):
        mid = math.floor((start + end) / 2)
        divide(arr, temp_arr, start, mid)
        divide(arr, temp_arr, mid+1, end)
        merge(arr, temp_arr, start, mid, end)

def merge(arr, temp_arr, start, mid, end):
    i = start
    j = mid + 1
    k = start

    while (i <= mid and j <= end):
        if (arr[i] < arr[j]):
            temp_arr[k] = arr[i]
            i += 1
        else:
            temp_arr[k] = arr[j]
            j += 1
        k += 1

    while (i <= mid):
        temp_arr[k] = arr[i]
        i += 1
        k += 1

    while (i <= mid):
        temp_arr[k] = arr[j]
        j += 1
        k += 1

    for l in range(end+1):
        arr[l] = temp_arr[l]