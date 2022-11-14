def insertion_sort(arr):
	  for i in range(len(arr)-1):
		    insert(arr, i, arr[i+1])

def insert(arr, sortedIndex, current):
		j = sortedIndex
		while j >= 0 and current < arr[j]:
				arr[j+1] = arr[j]
				j = j - 1
				arr[j+1] = current
