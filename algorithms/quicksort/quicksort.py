import math

def insertion_sort(arr):
    for i in range(len(arr)-1):
        insert(arr, i, arr[i+1])

def insert(arr, sortedIndex, current):
    j = sortedIndex
    while j >= 0 and current < arr[j]:
        arr[j+1] = arr[j]
        j = j - 1
        arr[j+1] = current

def quick_sort(arr):
    divide(arr, 0, len(arr) - 1)
    
def divide(arr, first, last):
    MIN_SIZE = 5
    if (last - first + 1 < MIN_SIZE):
        insertion_sort(arr)
    else :
        pivot_index = partition(arr, first, last)
        divide(arr, first, pivot_index)
        divide(arr, pivot_index + 1, last)

def sort_first_middle_last(arr, first, mid, last):
    if arr[first] > arr[mid]:
        arr[first], arr[mid] = arr[mid], arr[first]
    if (arr[mid] > arr[last]):
        arr[mid], arr[last] = arr[last], arr[mid]
    if (arr[first] > arr[mid]):
        arr[first], arr[mid] = arr[mid], arr[first]

def partition(arr, first, last):
    mid = math.floor((first + last) / 2)
    sort_first_middle_last(arr, first, mid, last)

    arr[mid], arr[last - 1] = arr[last - 1], arr[mid]
    pivot_index = last - 1
    pivot_value = arr[pivot_index]

    left_index = first + 1
    right_index = last - 2
    done = False

    while (done != True):
        while (arr[left_index] < pivot_value):
            left_index += 1
        while (arr[right_index] > pivot_value):
            right_index -= 1
        
        if (left_index < right_index):
            arr[left_index], arr[right_index] = arr[right_index], arr[left_index]
            left_index +=1 
            right_index -= 1
        else:
            done = True
    
    arr[pivot_index], arr[left_index] = arr[left_index], arr[pivot_index]
    return left_index